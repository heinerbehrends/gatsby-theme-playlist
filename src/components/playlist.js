import React from 'react';

const Playlist = ({ songs, setSong }) => (
  <section>
    <ul>
      {songs.map(({ title, id }, index) => (
        <li key={id}>
          <button onClick={() => setSong(index)}>
            {title}
          </button>
        </li>
      ))}
    </ul>
  </section>
)

export default Playlist;