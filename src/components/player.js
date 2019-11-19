/** @jsx jsx */
import React, { useState, useRef } from "react";
import { jsx, Styled, Container, ThemeProvider, Flex } from "theme-ui";
import ReactPlayer from "react-player";
import theme from "../theme/theme";
import "normalize.css/normalize.css";
import Controls from "./controls";
import Playlist from "./playlist";
import { nextOrFirst, nextOrLast } from "./playerButton";
import ProgressBar from "./progressBar";
import TimeDisplay from "./timeDisplay";
import AspectRatioBox from "./aspectRatioBox";

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
        <AspectRatioBox
          aspectRatio={360 / 640}
          onClick={() => {
            setIsPlaying(isPlaying ? false : true);
          }}
        >
          <ReactPlayer
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              cursor: "pointer",
              backgroundImage: `url(${songs[playingIndex].image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
            ref={refContainer}
            url={songs[playingIndex].url}
            playing={isPlaying}
            onProgress={data => setProgress(data)}
            onDuration={duration => setDuration(duration)}
            onEnded={() => setPlayingIndex(nextOrFirst(songs, playingIndex))}
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
                  modestbranding: 1,
                },
              },
            }}
          />
        </AspectRatioBox>
        <Flex sx={{ alignItems: "center", px: 0, py: 2 }}>
          <Controls
            isPlaying={isPlaying}
            playCallback={() => {
              setIsPlaying(isPlaying ? false : true);
            }}
            prevCallback={() => {
              setPlayingIndex(nextOrLast(songs, playingIndex));
            }}
            nextCallback={() => {
              setPlayingIndex(nextOrFirst(songs, playingIndex));
            }}
          />
          <ProgressBar
            played={progress.played}
            seek={e => {
              const played =
                e.nativeEvent.offsetX / e.currentTarget.clientWidth;
              seekTo(played);
              setProgress({ ...progress, played });
            }}
          />
          <TimeDisplay played={progress.playedSeconds} duration={duration} />
        </Flex>
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
