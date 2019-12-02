/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';

const ProgressBar = props => (
  <div
    {...props}
    sx={{
      height: 16,
      width: '100%',
      margin: 3,
      padding: 0,
      backgroundColor: 'lightgray',
      border: '0.5px solid',
      borderColor: 'bordercolor',
      cursor: 'pointer',
      boxShadow: 'boxshadow',
    }}
    onClick={props.seek}
  >
    <div
      sx={{
        width: `${props.played * 100}%`,
        height: 'inherit',
        backgroundColor: 'primary',
      }}
    />
  </div>
);

export default ProgressBar;
