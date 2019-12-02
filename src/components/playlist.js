/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx, Styled, Flex } from 'theme-ui';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Playlist = ({ songs, setPlayingIndex, playingIndex, isPlaying }) => (
  <section>
    <Styled.ul>
      {songs.map(({ title, id }, index) => (
        <Styled.li key={id}>
          <button
            sx={{
              padding: 3,
              width: '100%',
              fontSize: 2,
              textAlign: 'left',
              backgroundColor:
                playingIndex === index ? 'lightergray' : 'lightgray',
              border: '0.5px solid gray',
              borderTop: index === 0 ? '0.5px solid gray' : 'none',
              fontFamily: 'body',
              cursor: 'pointer',
              boxShadow: 'boxshadow',
            }}
            onClick={() => setPlayingIndex(index)}
          >
            <Flex sx={{ alignItems: 'center' }}>
              {playingIndex === index && isPlaying ? (
                <PlayArrowIcon sx={{ pr: 2, color: 'lightgreen' }} />
              ) : (
                ' '
              )}
              <span sx={{ margin: 0 }}>{title}</span>
              <InfoOutlinedIcon sx={{ marginLeft: 'auto' }} />
            </Flex>
          </button>
        </Styled.li>
      ))}
    </Styled.ul>
  </section>
);

export default Playlist;
