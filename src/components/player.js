/** @jsx jsx */
import React, { useState, useRef } from 'react'; // eslint-disable-line no-unused-vars
import ReactPlayer from 'react-player';
import { nextPrev, nextOrFirst, prevOrLast } from './buttons';

const initProgress = {
  playedSeconds: 0,
  played: 0,
  loadedSeconds: 0,
  loaded: 0,
};

function Player({ songs, children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [progress, setProgress] = useState(initProgress);

  const refContainer = useRef(ReactPlayer);
  const seekTo = refContainer.current.seekTo;

  console.log(seekTo);

  const playlistProps = {
    songs,
    setPlayingIndex,
    playingIndex,
    isPlaying,
  };
  const buttonProps = {
    songs,
    playingIndex,
    setPlayingIndex,
    setProgress,
  };
  const controlsProps = {
    playCallback: () => {
      setIsPlaying(isPlaying ? false : true);
    },
    prevCallback: () =>
      nextPrev(prevOrLast)({
        ...buttonProps,
      }),
    nextCallback: () =>
      nextPrev(nextOrFirst)({
        ...buttonProps,
      }),
    seekCallback: event => {
      const played =
        event.nativeEvent.offsetX / event.currentTarget.clientWidth;
      seekTo(played);
      setProgress({ ...progress, played });
    },
    isPlaying,
    progress,
    duration,
  };
  const playerProps = {
    ...buttonProps,
    ref: refContainer,
    url: songs[playingIndex].url,
    image: songs[playingIndex].image,
    playing: isPlaying,
    onProgress: data => setProgress(data),
    onDuration: duration => setDuration(duration),
    onEnded: () => {
      setPlayingIndex(nextOrFirst(songs, playingIndex));
      setIsPlaying(true);
    },
    onClick: () => setIsPlaying(isPlaying ? false : true),
    onPlay: () => setIsPlaying(true),
    onPause: () => setIsPlaying(false),
    height: '100%',
    width: '100%',
    config: {
      youtube: {
        playerVars: {
          controls: 1,
          rel: 0,
          modestbranding: 1,
        },
      },
    },
  };
  return children({ playlistProps, controlsProps, playerProps });
}

export default Player;
