/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import { jsx } from "theme-ui";

const minutes = sec => Math.floor(sec/60);
const seconds = sec => Math.round(sec%60);
const secToMinSec = sec => `${minutes(sec) < 10 ? 0 : ''}${minutes(sec)}:${seconds(sec) < 10 ? 0 : ''}${seconds(sec)}`;

const TimeDisplay = props => (
  <section {...props} sx={{flexShrink: 0, ml: [2, 2, 0]}}>
    {secToMinSec(props.played)} / {secToMinSec(props.duration)}
  </section>
);

export default TimeDisplay;