import React from "react";
import PlayerButton from "./playerButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

const Controls = ({ isPlaying, playCallback, prevCallback, nextCallback }) => (
  <>
    <PlayerButton callback={playCallback}>
      {isPlaying ? <PauseIcon/> : <PlayArrowIcon />}
    </PlayerButton>
    <PlayerButton callback={prevCallback}><SkipPreviousIcon /></PlayerButton>
    <PlayerButton callback={nextCallback}><SkipNextIcon /></PlayerButton>
  </>
);

export default Controls;
