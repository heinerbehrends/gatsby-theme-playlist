/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx, Flex } from 'theme-ui';
import Buttons from './buttons';
import ProgressBar from './progressBar';
import TimeDisplay from './timeDisplay';

const Controls = ({
  progress,
  isPlaying,
  isMuted,
  playCallback,
  prevCallback,
  nextCallback,
  muteCallback,
  seekCallback,
  duration,
}) => (
  <div sx={{ marginY: 3 }}>
    <ProgressBar
      played={progress.played}
      seek={seekCallback}
      sx={{ display: ['block', 'block', 'none'], m: 0, mt: [2, 2, 0] }}
    />
    <Flex sx={{ alignItems: 'center', px: 0, py: 2 }}>
      <Buttons
        isPlaying={isPlaying}
        isMuted={isMuted}
        playCallback={playCallback}
        prevCallback={prevCallback}
        nextCallback={nextCallback}
        muteCallback={muteCallback}
      />
      <ProgressBar
        played={progress.played}
        seek={seekCallback}
        sx={{ display: ['none', 'none', 'block'] }}
      />
      <TimeDisplay played={progress.playedSeconds} duration={duration} />
    </Flex>
  </div>
);

export default Controls;
