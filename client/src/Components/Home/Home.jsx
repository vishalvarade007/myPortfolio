import React, { useEffect } from 'react';
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import { TimeLine } from "../Timeline/Timeline";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { useSelector } from "react-redux";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs
} from "react-icons/si";

export function Home() {
  const { user } = useSelector((state) => state.user);
  const timelines = user.timeline;

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });

    const venusTexture = textureLoader.load(venusImage);
    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });

    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const pointLight = new THREE.PointLight(0xffffff, 200);
    const pointLight2 = new THREE.PointLight(0xffffff, 1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, 5, -5);

    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    scene.add(moon);
    scene.add(venus);
    scene.background = spaceTexture;
    scene.add(pointLight);
    scene.add(pointLight2);

    camera.position.set(4, 4, 9);
    venus.position.set(8, 5, 5);

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animate();
    const onScroll = () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;
  
      const skillsBox = document.getElementById("homeskillsBox");
      
      if (skillsBox) {
        if (window.scrollY > 1500) {
          skillsBox.style.animationName = "skillsBoxSlideOn";
        } else {
          skillsBox.style.animationName = "skillsBoxSlideOff";
        }
      }
    };
  
    window.addEventListener("scroll", onScroll);
  
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>
      <div className="homeCanvasOverlay">
        <Typography variant="h1">
          <p>V</p>
          <p>I</p>
          <p>S</p>
          <p>H</p>
          <p>A</p>
          <p>L</p>
        </Typography>

        <div className='homeaboutCanvas'>
          <Typography variant='h2'>DEVELOPER</Typography>
          <Typography variant='h2'>DESIGNER</Typography>
          <Typography variant='h2'>CREATOR</Typography>
        </div>
      </div>
      <div className='homeContainer'>
        <Typography variant='h3'>TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>
      <div className='homeSkills'>
        <Typography variant='h3'>SKILLS</Typography>
        <div className='homeCubeSkills'>
          <div className='homeCubeSkillsFaces homeCubeSkillsFace1'>
            <img src={user.skills.image1.url} alt='face1' />
          </div>
          <div className='homeCubeSkillsFaces homeCubeSkillsFace2'>
            <img src={user.skills.image2.url} alt='face2' />
          </div>
          <div className='homeCubeSkillsFaces homeCubeSkillsFace3'>
            <img src={user.skills.image3.url} alt='face3' />
          </div>
          <div className='homeCubeSkillsFaces homeCubeSkillsFace4'>
            <img src={user.skills.image4.url} alt='face4' />
          </div>
          <div className='homeCubeSkillsFaces homeCubeSkillsFace5'>
            <img src={user.skills.image5.url} alt='face5' />
          </div>
          <div className='homeCubeSkillsFaces homeCubeSkillsFace6'>
            <img src={user.skills.image6.url} alt='face6' />
          </div>
        </div>
        <div className='cubeShadow'></div>
        <div className='homeSkillsBox' id="homeskillsBox">
          <SiReact />
          <SiMongodb />
          <SiJavascript />
          <SiNodedotjs />
          <SiExpress />
          <SiHtml5 />
          <SiCss3 />
          <SiThreedotjs />
        </div>
      </div>
      <div className='homeProjects'>
        <Typography variant='h3'>PROJECTS</Typography>
        <div className='homeProjectsWrapper'>
          {user && user.projects &&
            user.projects.map((item, index) => (
              <ProjectCard
                id={item._id}
                key={item._id}
                url={item.url}
                projectImage={item.image.url}
                projectTitle={item.title}
                projectDescription={item.description}
                technologies={item.techStack}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
