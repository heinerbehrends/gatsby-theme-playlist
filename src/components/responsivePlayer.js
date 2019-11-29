/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import AspectRatioBox from '../components/aspectRatioBox';
import ReactPlayer from 'react-player';

function ResponsivePlayer(props) {
  return (
    <AspectRatioBox aspectRatio={360 / 640}>
      <ReactPlayer
        {...props}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          cursor: 'pointer',
          backgroundImage: `url(${props.image})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          border: '0.5px solid',
          borderColor: 'bordercolor',
          boxShadow: 'boxshadow',
        }}
      />
    </AspectRatioBox>
  );
}

export default ResponsivePlayer;
