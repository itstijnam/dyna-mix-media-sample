import React from 'react'
import './style/Home.scss'
import GetButton from '../components/ui/GetButton'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  return (
    <>
        <div className="homeContainer">
            <div className="dynaMixMediaLogo">
                <img src="" alt="" />
            </div>
            <div className="getStarted">
                <GetButton text="Get Started" workFunction={()=>navigate('/add-event')} />
            </div>
        </div>
    </>
  )
}

export default Home