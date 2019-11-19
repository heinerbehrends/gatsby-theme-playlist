/** @jsx jsx */
import React from "react";
import { jsx, Styled, Flex } from "theme-ui";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const Playlist = ({ songs, setSong, playingIndex, isPlaying }) => (
  <section>
    <Styled.ul>
      {songs.map(({ title, id }, index) => (
        <Styled.li key={id}>
          <button
            sx={{
              padding: 3,
              width: "100%",
              textAlign: "left",
              backgroundColor: playingIndex === index ? "lightergray" : "lightgray",
              border: "0.5px solid gray", 
              fontFamily: 'body',
            }}
            onClick={() => setSong(index)}
          >
            <Flex sx={{ alignItems: "center" }}>
              {playingIndex === index && isPlaying ? (
                <PlayArrowIcon sx={{ pr: 2, color: 'lightgreen' }} />
              ) : (
                " "
              )}
              <span sx={{ margin: 0 }}>{title}</span>
            </Flex>
          </button>
        </Styled.li>
      ))}
    </Styled.ul>
  </section>
);

export default Playlist;
