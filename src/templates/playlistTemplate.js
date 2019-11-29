/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx, Styled } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import Player from '../components/player';
import Layout from '../components/layout';
import Controls from '../components/controls';
import Playlist from '../components/playlist';
import AspectRatioBox from '../components/aspectRatioBox';
import ReactPlayer from 'react-player';

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
    <Layout>
      <Styled.h1>Music</Styled.h1>
      <Player songs={data.allSong.nodes}>
        {({ playlistProps, controlsProps, playerProps }) => (
          <>
            <AspectRatioBox aspectRatio={360 / 640}>
              <ReactPlayer
                {...playerProps}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  cursor: 'pointer',
                  backgroundImage: `url(${
                    playerProps.songs[playerProps.playingIndex].image
                  })`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  border: '0.5px solid',
                  borderColor: 'bordercolor',
                  boxShadow: 'boxshadow',
                }}
              />
            </AspectRatioBox>
            <Controls {...controlsProps} />
            <Playlist {...playlistProps} />
          </>
        )}
      </Player>
    </Layout>
  );
};

export default PlaylistTemplate;
