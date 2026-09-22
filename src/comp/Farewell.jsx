function Farewell() {
  return (
    <div className="farewell-video-container">
      <div className="farewell-videoplayer">
        <video
          className="videoplayer__video"
          autoPlay
          playsInline
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="/farewell.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Farewell
