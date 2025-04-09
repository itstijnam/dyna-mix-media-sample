import React from 'react'
import './Header.scss'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    return (
        <div className="Header">
            <div className="dynaMixMediaLogo">
                <img src="/icons/DynamixMediaLogo.png" alt="" />
            </div>
            <div className="dynaMixMediaServices">
                <ul>
                    <li style={{cursor: 'pointer'}} onClick={()=>navigate('/')}>Home</li>
                    <li style={{cursor: 'pointer'}} onClick={()=>navigate('/events')}>Events</li>
                    <li style={{cursor: 'pointer'}} onClick={()=>navigate('/add-event')}>Create</li>
                </ul>
            </div>
        </div>
    )
}

export default Header