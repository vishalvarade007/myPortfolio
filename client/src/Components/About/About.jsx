import React from 'react';
import "./About.css";
import { Typography } from '@mui/material';
import {useSelector} from "react-redux";

export function About() {
    const {user} = useSelector((state)=>state.user);
    const about = user.about; 
    console.log(about.avatar.url);
  return (
    <div className='about'>
        <div className='aboutContainer1'>
            <Typography>
            {about.quote}
            </Typography>
        </div>
        <div className='aboutContainer2'>
            <div>
                <img src={about.avatar.url} alt='Img' className='aboutAvatar'/>
                <Typography variant='h4' style={{margin:"1vmax 0", color:"black"}}>{about.name}</Typography>
                <Typography style={{margin:"0.5vmax 0"}}>{about.title}</Typography>
            </div>
            <div>
                <Typography >
                {about.description}
                </Typography>
            </div>
        </div>
    </div>
  )
}
