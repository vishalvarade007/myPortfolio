import React from 'react';
import "./Footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {BiLogoGithub,BiLogoInstagram,BiLogoLinkedin} from "react-icons/bi";

export function Footer() {
    return (
        <div className='footer'>
            <div>
                <Typography variant='h5'>ABOUT ME</Typography>
                <Typography>
                    Hey, my name is <b>Vishal Varade</b>. I am a skilled <b>MERN stack developer</b> with expertise
                    in building full-stack web applications using MongoDB, Express.js, React, and
                    Node.js. I specialize in creating dynamic, responsive websites with seamless user experiences.
                </Typography>

                
                    <button><Link to={"/contact"}>Contact Me</Link></button>
            
            </div>
            <div>
                <Typography component="h6">Social Media</Typography>
                <a
                    href="https://github.com/vishalvarade007"
                    target="blank"
                    className='github'
                >
                    <BiLogoGithub/>
                </a>

                <a href="https://instagram.com/vishalvarade__" target="blank" className='insta'>
                    <BiLogoInstagram/>
                </a>
                <a href="https://www.linkedin.com/in/vishal-varade-477868297" target="blank" className='linkedin'>
                    <BiLogoLinkedin />
                </a>
            </div>
        </div>
    )
}