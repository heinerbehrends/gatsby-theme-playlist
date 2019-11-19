/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const ProgressBar = ({ played, seek }) => (
  <div
    sx={{
      height: 16,
      width: "100%",
      margin: 2,
      padding: 0,
      backgroundColor: 'lightgray',
      border: "0.5px solid gray",
    }}
    onClick={seek}
  >
    <div
      sx={{
        width: `${played * 100}%`,
        height: "inherit",
        backgroundColor: 'primary'
      }}
    />
  </div>
);

export default ProgressBar;
