import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Player from "../components/player";

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
    <Player songs={data.allSong.nodes} />
  );
};

export default PlaylistTemplate;
