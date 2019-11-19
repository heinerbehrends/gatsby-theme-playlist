/** @jsx jsx */
import React, { useState, useRef } from "react"; // eslint-disable-line no-unused-vars
import { jsx, Styled, Container, ThemeProvider } from "theme-ui";
import theme from "../theme/theme";
import ReactPlayer from "react-player";
import "normalize.css/normalize.css";
import Controls from "./controls";
import Playlist from "./playlist";
import AspectRatioBox from "./aspectRatioBox";
import { nextOrFirst, nextOrLast } from "./buttons";

const Player = ({ songs }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [progress, setProgress] = useState({
    playedSeconds: 0,
    played: 0,
    loadedSeconds: 0,
    loaded: 0
  });

  const refContainer = useRef(ReactPlayer);
  const seekTo = refContainer.current.seekTo;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Styled.h1>Music</Styled.h1>
        <AspectRatioBox aspectRatio={360 / 640}>
          <ReactPlayer
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              cursor: "pointer",
              backgroundImage: `url(${songs[playingIndex].image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              border: "0.5px solid",
              borderColor: 'bordercolor',
              boxShadow: 'boxshadow',
            }}
            ref={refContainer}
            url={songs[playingIndex].url}
            playing={isPlaying}
            onProgress={data => setProgress(data)}
            onDuration={duration => setDuration(duration)}
            onEnded={() => {
              setPlayingIndex(nextOrFirst(songs, playingIndex));
              setIsPlaying(true);
            }}
            onClick={() => setIsPlaying(isPlaying ? false : true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            height="100%"
            width="100%"
            config={{
              youtube: {
                playerVars: {
                  controls: 1,
                  rel: 0,
                  modestbranding: 1
                }
              }
            }}
          />
        </AspectRatioBox>
        <Controls
          playCallback={() => {
            setIsPlaying(isPlaying ? false : true);
          }}
          prevCallback={() => {
            setPlayingIndex(nextOrLast(songs, playingIndex));
          }}
          nextCallback={() => {
            setPlayingIndex(nextOrFirst(songs, playingIndex));
          }}
          seekCallback={event => {
            const played = (
              event.nativeEvent.offsetX / event.currentTarget.clientWidth
            );
            seekTo(played);
            setProgress({ ...progress, played });
          }}
          isPlaying={isPlaying}
          progress={progress}
          duration={duration}
        />
        <Playlist
          songs={songs}
          setSong={setPlayingIndex}
          playingIndex={playingIndex}
          isPlaying={isPlaying}
        />
      </Container>
    </ThemeProvider>
  );
};

export default Player;
