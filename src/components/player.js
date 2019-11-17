/** @jsx jsx */
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Container, ThemeProvider, Flex } from "theme-ui";
import { jsx, css } from "@emotion/core";
import theme from "../theme/theme";
import Controls from "./controls";
import Playlist from "./playlist";
import { nextOrFirst, nextOrLast } from "./playerButton";
import ProgressBar from "./progressBar";
import TimeDisplay from "./timeDisplay";
import AspectRatioBox from "./aspectRatioBox";

const Player = ({ songs }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState({
    playedSeconds: 0,
    played: 0,
    loadedSeconds: 0,
    loaded: 0
  });
  const [duration, setDuration] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(0);

  const refContainer = useRef(ReactPlayer);
  const seekTo = refContainer.current.seekTo;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AspectRatioBox aspectRatio={360 / 640}>
          <ReactPlayer
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              background-image: url(${songs[playingIndex].image});
            `}
            ref={refContainer}
            url={songs[playingIndex].url}
            playing={isPlaying}
            onProgress={data => setProgress(data)}
            onDuration={duration => setDuration(duration)}
            onEnded={() => setPlayingIndex(nextOrFirst(songs, playingIndex))}
            height="100%"
            width="100%"
          />
        </AspectRatioBox>
        <Flex sx={{ alignItems: "center" }}>
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
        <Playlist songs={songs} setSong={setPlayingIndex} />
      </Container>
    </ThemeProvider>
  );
};

export default Player;
