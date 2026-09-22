import React from 'react'
import { Link } from 'react-router-dom';    

const BackButton = () => {
  return (
    <Link to="/logMenu" className="back-button">
        <img src="/backalt.png" alt="Back" style={{ cursor: 'pointer' }} />
    </Link>
  )
}

export default BackButton