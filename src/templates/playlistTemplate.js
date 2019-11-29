import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Player from '../components/player';
import Controls from '../components/controls';
import Playlist from '../components/playlist';
import ResponsivePlayer from '../components/responsivePlayer';

const PlaylistTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allSong {
        nodes {
          id
          music
          title
          url
          lyrics
          image
        }
      }
    }
  `);

  return (
    <Player songs={data.allSong.nodes}>
      {({ playlistProps, controlsProps, playerProps }) => (
        <>
          <ResponsivePlayer {...playerProps} />
          <Controls {...controlsProps} />
          <Playlist {...playlistProps} />
        </>
      )}
    </Player>
  );
};

export default PlaylistTemplate;
