import React from 'react';
import "./Projects.css";
import {Typography} from "@mui/material";
import {AiOutlineProject} from "react-icons/ai";
import {FaRegSmileWink} from "react-icons/fa";
import { ProjectCard } from '../ProjectCard/ProjectCard';

export function Projects({projects}) {
   
  return (
    <div className='projects'>
       <Typography variant='h5'>
          Projects <AiOutlineProject/>
       </Typography>
       <div className='projectsWrapper'>
        {projects.map((project)=>(
            <ProjectCard
               id={project._id}
               key={project._id}
               url={project.url}
               projectImage={project.image.url}
               projectTitle={project.title}
               projectDescription={project.description}
               technologies={project.techStack}
            />
        ))}
       </div>
       <Typography variant="h4" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me<FaRegSmileWink style={{marginLeft:"5px" }} className='smile'/>
      </Typography>
    </div>
  )
}