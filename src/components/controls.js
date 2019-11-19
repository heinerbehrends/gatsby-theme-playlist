/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import { jsx, Flex } from "theme-ui";
import Buttons from "./buttons";
import ProgressBar from "./progressBar";
import TimeDisplay from "./timeDisplay";

const Controls = ({
  progress,
  isPlaying,
  playCallback,
  prevCallback,
  nextCallback,
  seekCallback,
  duration
}) => (
  <Flex sx={{ alignItems: "center", px: 0, py: 2, }}>
    <Buttons
      isPlaying={isPlaying}
      playCallback={playCallback}
      prevCallback={prevCallback}
      nextCallback={nextCallback}
    />
    <ProgressBar 
      played={progress.played} 
      seek={seekCallback} 
    />
    <TimeDisplay 
      played={progress.playedSeconds} 
      duration={duration} 
    />
  </Flex>
);

export default Controls;
