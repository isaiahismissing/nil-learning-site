import React, { useEffect, useRef, useState } from 'react';
import { IoPauseSharp } from 'react-icons/io5';
import { IoMdPlay } from "react-icons/io";

function AudioPlayer({ media = '/audiotestbeat2.mp3', logNumber = '001', text = 'Audio log', picture = '/audioplayer.jpg' }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = media;
    audio.load();
    setIsPlaying(false);
  }, [media]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      setIsPlaying(false);
    }
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '717px 420px auto',
        alignItems: 'center',
        columnGap: '1.5rem',
        position: 'fixed',
        left: '17.8%',
        top: '56%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: 'max-content',
      }}
    >
      <img
        src={picture}
        alt="Log artwork"
        style={{
          width: '717px',
          height: '538px',
          background: '#000',
          border: '1px solid #deb887',
          borderRadius: '0px',
          overflow: 'hidden',
          flexShrink: 0,
          objectFit: 'cover',
        }}
      />

      <div style={{ textAlign: 'left', fontFamily: '"Courier New", Courier, monospace', color: 'burlywood', maxWidth: '420px', justifySelf: 'start' }}>
        <h1 className="text-2xl font-extrabold" style={{ fontFamily: '"Courier New", Courier, monospace', color: 'burlywood' }}>
          Audio <span style={{ color: 'white' }}>#{logNumber}</span>
        </h1>
        <p style={{ lineHeight: 1.6, fontFamily: '"Courier New", Courier, monospace', color: 'burlywood' }}>{text}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', justifySelf: 'center' }}>
        <audio ref={audioRef} preload="auto" src={media}>
          Your browser does not support the audio element.
        </audio>

        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
          }}
        >
          {isPlaying ? (
            <IoPauseSharp className="text-9xl text-[#deb887]" />
          ) : (
            <IoMdPlay className="text-9xl text-[#deb887]" />
          )}
        </button>
      </div>
    </div>
  );
}

export default AudioPlayer;
