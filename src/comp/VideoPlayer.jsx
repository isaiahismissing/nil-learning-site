function VideoPlayer({ media, logNumber, text }) {
  return (
    <div className="video-container">
      <div className="videoplayer">
        <video
          className="videoplayer__video"
          autoPlay
          loop
          muted
          playsInline
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src={media} type="video/mp4" />
        </video>
      </div>

      <div className="video-text">
        <h1 className="text-2xl font-extrabold">Log <span className="text-white">#{logNumber}</span></h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default VideoPlayer
