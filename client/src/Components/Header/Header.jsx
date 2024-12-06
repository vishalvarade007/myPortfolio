import React, { useState } from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import logo from "../../Images/mylogo.png";
import {MdAccountCircle} from "react-icons/md";
import {RxCross2, RxHamburgerMenu} from "react-icons/rx";

export function Header() {
  const [open,setOpen] = useState(false);
  const handleClose = ()=>{
    setOpen(!open);
  }
  return (
    <>
     {
      open ? (
        <div className="container1">
        <div className={`mydiv yourdiv1`}>
         <RxCross2 className='cross' onClick={handleClose}/>
        <Link to={"/"} onClick={handleClose}><img src={logo} alt="logo" height={100} width={100} id="mylogo"/></Link>
        </div>
        <div className={`mydiv yourdiv2`}>
        <Link to={"/"} onClick={handleClose}>Home</Link>
        </div>
        <div className={`mydiv yourdiv3`}>
        <Link to={"/about"} onClick={handleClose}>About</Link>
        </div>
        <div className={`mydiv yourdiv4`}>
        <Link to={"/projects"} onClick={handleClose}>Projects</Link>
        </div>
        <div className={`mydiv yourdiv5`}>
        <Link to={"/contact"} onClick={handleClose}>Contact</Link>
        </div>
        <div className={`mydiv yourdiv6`}>
        <Link to={"/account"} onClick={handleClose}><MdAccountCircle className='person'/></Link>
        </div>
     </div>
      ) :(
        <>
           <RxHamburgerMenu className='burger' onClick={handleClose}/>
        </>
      )
     }
    </>
   
  )
}