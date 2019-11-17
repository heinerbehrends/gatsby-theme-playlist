import React from 'react';

const ProgressBar = ({ played, seek }) => (
  <div 
    style={{height: "16px", width: "100%", margin: 0, padding: 0, backgroundColor: 'lightgray'}} 
    onClick={seek}
  >
    <div style={{
      width: `${played * 100}%`, 
      height: "inherit", 
      backgroundColor: "hotpink",
    }} />
  </div>
);

export default ProgressBar;