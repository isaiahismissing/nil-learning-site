import React from 'react';
import { Link } from 'react-router-dom';    

function StartLogo() {
    
    return (
        <>
        <Link to="/logMenu" className="logo">
            <img src="/logomenu.png" alt="Logo" style={{ cursor: 'pointer' }} />
            
        </Link> 
        </>
    ) }
export default StartLogo;