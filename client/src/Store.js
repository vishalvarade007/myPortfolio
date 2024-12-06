import {configureStore} from "@reduxjs/toolkit";
import { loginReducer, updateReducer, userReducer } from "./Reducers/User";

export const store = configureStore({
     reducer:{
         user:userReducer,
         login:loginReducer,
         update:updateReducer,
     }
});