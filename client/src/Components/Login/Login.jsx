import React, { useEffect, useState } from 'react';
import "./Login.css";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../Actions/User';
import { useAlert } from "react-alert";
import { CLEAR_ERRORS, CLEAR_MESSAGE } from '../../Constants/userConstants';

export function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const dispatch = useDispatch();
   const alert = useAlert();
   const {loading, error, message} = useSelector((state)=>state.login); 

   const submitHandler = (e) => {
      e.preventDefault();
     dispatch(login(email, password));
   }

   useEffect(()=>{
      if(error){
          alert.error(error.message);
          dispatch({type:CLEAR_ERRORS});
      }
      if(message){
         alert.success(message);
         dispatch({type:CLEAR_MESSAGE});
     }
   },[alert,error,message,dispatch]);

   return (
      <div className='login'>
         <div className='loginContainer'>
            <form className='loginForm' onSubmit={submitHandler}>
               <Typography variant='h4'>
                  <p>A</p>
                  <p>D</p>
                  <p>M</p>
                  <p>I</p>
                  <p style={{ marginRight: "1vmax" }}>N</p>

                  <p>P</p>
                  <p>A</p>
                  <p>N</p>
                  <p>E</p>
                  <p>L</p>
               </Typography>
               <div>
                  <input
                     type='email'
                     placeholder='Admin Email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                  />
                  <input
                     type='password'
                     placeholder='Admin Password'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                  />
                  <Button variant='contained' type='submit' disabled={loading}>
                     Login
                  </Button>
               </div>
            </form>
         </div>
      </div>
   )
}