import React from 'react';

const minutes = sec => Math.floor(sec/60);
const seconds = sec => Math.round(sec%60);
const secToMinSec = sec => `${minutes(sec) < 10 ? 0 : ''}${minutes(sec)}:${seconds(sec) < 10 ? 0 : ''}${seconds(sec)}`;

const TimeDisplay = ({ played, duration }) => (
  <section>
    {secToMinSec(played)}/{secToMinSec(duration)}
  </section>
);

export default TimeDisplay;