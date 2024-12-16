import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Contact } from './Components/Contact/Contact';
import { Login } from './Components/Login/Login';
import { About } from './Components/About/About';
import { getUser, loadUser } from './Actions/User';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { Projects } from './Components/Projects/Projects';
import { AdminPanel } from './Components/Admin/AdminPanel';
import { Timeline } from './Components/Admin/Timeline';
import { Project } from './Components/Admin/Project';
import { Loader } from './Components/Loader/Loader';
import { useAlert } from 'react-alert';

function App() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const {isAuthenticated} = useSelector((state)=>state.login);
  const {loading} = useSelector((state)=>state.user);
  const {user} = useSelector((state)=>state.user);

  useEffect(() => {
   dispatch(getUser());
   dispatch(loadUser());
   const hasShownNotification = sessionStorage.getItem('hasShownNotification');
   if(!hasShownNotification){
     alert.show("Please Wait 60 Seconds To Load The Data",{type:'info'});
     sessionStorage.setItem('hasShownNotification','true');
     setTimeout(() => {
       alert.removeAll();
     }, 60000);
   }
  }, [dispatch]);
  return (
    <BrowserRouter>
     {loading ? (<Loader/>):(
      <>
      <Header/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/account" element={isAuthenticated ? <AdminPanel/> : <Login/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/projects" element={<Projects projects={user.projects}/>}/>
         <Route path="/admin/timeline"  element={isAuthenticated ? <Timeline/> : <Login/>}/>
         <Route path="/admin/projects"  element={isAuthenticated ? <Project/> : <Login/>}/>


      </Routes>
     <Footer/>
     </>
     )}
    </BrowserRouter>
  );
}

export default App;
