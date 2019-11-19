/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import { jsx } from "theme-ui";

const minutes = sec => Math.floor(sec/60);
const seconds = sec => Math.round(sec%60);
const secToMinSec = sec => `${minutes(sec) < 10 ? 0 : ''}${minutes(sec)}:${seconds(sec) < 10 ? 0 : ''}${seconds(sec)}`;

const TimeDisplay = ({ played, duration }) => (
  <section sx={{flexShrink: 0}}>
    {secToMinSec(played)} / {secToMinSec(duration)}
  </section>
);

export default TimeDisplay;