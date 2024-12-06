import React, { useEffect, useState } from 'react';
import "./Contact.css";
import {Button, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useAlert} from "react-alert";
import { contactUs } from '../../Actions/User';
import { CLEAR_ERRORS, CLEAR_MESSAGE } from '../../Constants/userConstants';

export function Contact() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const {loading,error,message:alertMessage} = useSelector((state)=>state.update);

    const dispatch = useDispatch();
    const alert = useAlert();

    const contactFormHandler = (e)=>{
       e.preventDefault();
       dispatch(contactUs(name,email,message));
    }

    useEffect(()=>{
       if(error){
        alert.error(error);
        dispatch({type:CLEAR_ERRORS});
       }
       if(alertMessage){
        alert.success(alertMessage);
        dispatch({type:CLEAR_MESSAGE});
       }
    },[error,alert,alertMessage,dispatch]);

  return (
    <div className='contact'>
       <div className='contactRightBar'></div>
       <div className='contactContainer'>
         <form className='contactContainerForm' onSubmit={contactFormHandler}>
            <Typography variant='h4'>Contact Us</Typography>
            <input required type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input required type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <textarea required placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            <Button type='submit' variant='contained' disabled={loading}>Send</Button>
         </form>
       </div>
    </div>
  )
}