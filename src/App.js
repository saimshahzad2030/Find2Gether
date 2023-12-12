
// import style from './App.module.css'

import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Landing from "./components/Landing/Landing";
import MainSection from "./components/MainSection/MainSection";
import { Link } from "react-router-dom";
import Row from './components/Row/Row';
import Column from './components/Column/Column';
import {Input, Button } from "@mui/material";
import Footer from './components/Footer/Footer'
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={
    <>
   <Navbar/>
   <Landing/>
   <MainSection/>
   <Row styles={{paddingTop:'50px',paddingBottom:'50px'}}>
              <Column>
              <img src={process.env.PUBLIC_URL + '/Assets/logo/logo.png'} alt="logo"/>
              <p style={{fontFamily:'cursive'}}>Solution to find missing ones and also a way to help others for finding their missing ones because together we can make this earth a better place..</p>
              </Column>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'white'}}>Contacts</h2>
              <p>+92 3142274221</p>
              <p>saimshehzad2030@gmail.com</p>
              </Column>
              <Column>
              <h2 style={{fontWeight:'bold',marginBottom:'10px',color:'white'}}>Links</h2>
              <p><Link style={{textDecoration:'none',color:'aliceblue'}} to={'/'}>Home</Link></p>
              <p><Link style={{textDecoration:'none',color:'aliceblue'}} to={'/'}>Our App</Link></p>
              <p><Link style={{textDecoration:'none',color:'aliceblue'}} to={'/'}>About us</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." sx={{marginTop:'20px',color:'white'}}/>
              <Button variant="outlined" sx={{margin:'20px',color:'white'}}>Send</Button>
   
              </Column>
             </Row>
             <Footer><h4 style={{color:'rgb(0, 51, 102)'}}>Copyright @ Saim Shahzad</h4></Footer>
    </>
  }/>
</Routes></BrowserRouter>
  );
}

export default App;
