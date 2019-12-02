/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import AspectRatioBox from '../components/aspectRatioBox';
import ReactPlayer from 'react-player';

const ResponsivePlayer = React.forwardRef((props, ref) => {
  // const refContainer = React.useRef(ReactPlayer);
  const seekTo = ref.current.seekTo;
  console.log(seekTo);
  return (
    <AspectRatioBox aspectRatio={360 / 640}>
      <ReactPlayer
        {...props}
        ref={ref}
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
});

export default ResponsivePlayer;
