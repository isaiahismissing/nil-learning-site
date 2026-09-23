gitimport { useState } from 'react'

function Farewell() {
  const [password, setPassword] = useState('')
  const CORRECT = '05122024'
  const authorized = password === CORRECT

  return (
    <div className="farewell-video-container">
      {!authorized ? (
        <div className="farewell-password" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label style={{ marginBottom: 8, fontFamily: '"Courier New", Courier, monospace', color: 'burlywood' }}>
            Enter password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{ fontFamily: '"Courier New", Courier, monospace', color: 'burlywood', padding: '6px 8px' }}
          />
        </div>
      ) : (
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
      )}
    </div>
  )
}

export default Farewell
