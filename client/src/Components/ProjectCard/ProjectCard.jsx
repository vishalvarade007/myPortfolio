import React from 'react';
import "./ProjectCard.css";
import {Button, Typography} from "@mui/material";
import {AiFillDelete} from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { deleteProject, getUser } from '../../Actions/User';


export function ProjectCard({
  url,
  projectImage,
  projectTitle,
  projectDescription,
  technologies,
  isAdmin = false,
  id
}){
 const dispatch = useDispatch();
 
 const deleteHandler  =async()=>{
     await dispatch(deleteProject(id));
     dispatch(getUser());
 }
 return (
   <>
     <a href={url} className='projectCard'>
      
      <div>
          <img src={projectImage} alt='img'/>
          <Typography variant='h5'>{projectTitle}</Typography>
      </div>
      <div className='aboutdiv'>
          <Typography variant='h4'>ABOUT PROJECT</Typography>
          <Typography>{projectDescription}</Typography>
          <Typography variant='h6'>Tech Stack :{technologies}</Typography>
      </div>
      </a>
     {isAdmin && (
        <Button style={{color:"rgba(40,40,40,0.7)"}} onClick={()=>deleteHandler(id)}>
           <AiFillDelete className='deleteSvg'/>
        </Button>
     )}
   </>
 )
}