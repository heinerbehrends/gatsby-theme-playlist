/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

const buttonStyles = {
  border: '0.5px solid',
  borderColor: 'bordercolor',
  flexShrink: 0,
  cursor: 'pointer',
  boxShadow: 'boxshadow',
};

const pauseAnimation = keyframes`
  from {
    box-shadow: 0px 0px 2px 2px rgba(0, 200, 0, 0.5);
  } to {
    box-shadow: 0px 0px 0px 0px rgba(0, 200, 0, 0);
  }
`;

export const nextOrFirst = (array, index) =>
  index + 1 === array.length ? 0 : index + 1;
export const prevOrLast = (array, index) =>
  index - 1 < 0 ? array.length - 1 : index - 1;
export const nextPrev = firstLastLoop => ({
  songs,
  playingIndex,
  setPlayingIndex,
  setProgress,
}) => {
  setPlayingIndex(firstLastLoop(songs, playingIndex));
  setProgress({
    playedSeconds: 0,
    played: 0,
    loadedSeconds: 0,
    loaded: 0,
  });
};

const PlayButton = ({ callback, isPlaying }) => (
  <button
    onClick={callback}
    sx={{
      ...buttonStyles,
      height: [5, 6],
      width: [5, 6],
      margin: 2,
      marginLeft: 0,
      borderRadius: '50%',
      animation: `${pauseAnimation} 1.5s steps(${
        isPlaying ? 1 : 2
      }, end) infinite`,
    }}
  >
    <Flex>
      {isPlaying ? (
        <PauseIcon sx={{ mx: 'auto' }} fontSize="large" />
      ) : (
        <PlayArrowIcon sx={{ mx: 'auto' }} fontSize="large" />
      )}
    </Flex>
  </button>
);

const PrevButton = ({ callback }) => (
  <button
    onClick={callback}
    sx={{
      ...buttonStyles,
      padding: [1, 2],
      paddingLeft: [2, 3],
      borderRight: 'none',
      borderRadius: '100px 0 0 100px',
      ':active': {
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
      },
    }}
  >
    <Flex>
      <SkipPreviousIcon />
    </Flex>
  </button>
);

const NextButton = ({ callback }) => (
  <button
    onClick={callback}
    sx={{
      ...buttonStyles,
      padding: [1, 2],
      paddingRight: [2, 3],
      borderRadius: '0 100px 100px 0',
      ':active': {
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
      },
    }}
  >
    <Flex>
      <SkipNextIcon />
    </Flex>
  </button>
);

const PrevNextButton = ({ prevCallback, nextCallback }) => (
  <>
    <PrevButton callback={prevCallback} />
    <NextButton callback={nextCallback} />
  </>
);

const Buttons = ({ isPlaying, playCallback, prevCallback, nextCallback }) => (
  <>
    <PlayButton callback={playCallback} isPlaying={isPlaying} size="80px" />
    <PrevNextButton
      prevCallback={prevCallback}
      nextCallback={nextCallback}
      size="80px"
      sx={{ padding: 2 }}
    />
  </>
);

export default Buttons;
