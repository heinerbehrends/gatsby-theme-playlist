/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import PlayerButton from "./playerButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

const buttonStyles = {
  border: "0.5px solid gray",
  flexShrink: 0,
  cursor: "pointer", 
};

const PlayButton = ({ callback, isPlaying, size }) => (
  <button
    onClick={callback}
    sx={{
      ...buttonStyles,
      height: size,
      width: size,
      margin: 2,
      marginLeft: 0,
      borderRadius: "50%",
    }}
  >
    {isPlaying ? (
      <PauseIcon fontSize="large" />
    ) : (
      <PlayArrowIcon fontSize="large" />
    )}
  </button>
);

const PrevButton = ({ callback }) => (
  <button
    onClick={callback}
    sx={{
      ...buttonStyles,
      padding: 2,
      paddingLeft: 3,
      borderRadius: "100px 0 0 100px",
    }}
  >
    <SkipPreviousIcon />
  </button>
);

const NextButton = ({ callback }) => (
  <button
    onClick={callback}
    sx={{
      ...buttonStyles,
      padding: 2,
      paddingRight: 3,
      borderRadius: "0 100px 100px 0",
    }}
  >
    <SkipNextIcon />
  </button>
);

const PrevNextButton = ({ prevCallback, nextCallback, size }) => (
  <>
    <PrevButton callback={prevCallback} />
    <NextButton callback={nextCallback} />
  </>
);

const Controls = ({ isPlaying, playCallback, prevCallback, nextCallback }) => (
  <>
    <PlayButton callback={playCallback} isPlaying={isPlaying} size="80px" />
    <PrevNextButton
      prevCallback={prevCallback}
      nextCallback={nextCallback}
      size="80px"
      sx={{padding: 2}}
    />
  </>
);

export default Controls;
