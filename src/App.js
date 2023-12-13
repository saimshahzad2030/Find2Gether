
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
import { useState,useEffect, useRef } from "react";
import OurApp from "./components/OurApp/OurApp";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isEffectApplied, setIsEffectApplied] = useState(false);
  const [isRowEffectApplied, setIsRowEffectApplied] = useState(false);
  const reference = useRef(null)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        const screenWidth = window.innerWidth;
        if (reference.current) {
          if (screenWidth >= 750) {
            reference.current.style.display = 'flex';
          } else {
            reference.current.style.display = 'none';
          }
        }
       
    }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const screenWidth = window.innerWidth;
  if (screenWidth >= 750) {
      reference.current.style.display = 'flex';
  }
  else{
      
      reference.current.style.display = 'none';
  }
};
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const handleScrollEffect = () => {
      if (!isEffectApplied) {
        // Check if the scroll position is beyond a certain point (e.g., 200)
        if (scrollY > 200) {
          // Apply your fade effect or any other effect here
          setIsEffectApplied(true); // Set the flag to indicate that the effect has been applied
        
        }
      }
      if (!isRowEffectApplied) {
        // Adjust the scroll position based on your design
        if (scrollY > 800) {
          setIsRowEffectApplied(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollEffect);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollEffect);
    };
  }, [isEffectApplied, isRowEffectApplied, scrollY]);

  const mainSectionOpacity = isEffectApplied ? 1 : 0;
  const rowSectionOpacity = isRowEffectApplied ? 1 : 0;
  useEffect(()=>
  {
    const handleResize = ()=>{
      const screenWidth = window.innerWidth;
    if (screenWidth >= 750) {
      reference.current.style.display = 'flex';
    } else {
      reference.current.style.display = 'none'; // or any other desired style
    }
    
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [reference])
console.log(scrollY)
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={
    <>
   <Navbar scrollToSection={scrollToSection} scrollToTop={scrollToTop} reference={reference}/>
   <Landing />
   <MainSection  styles={{ opacity: mainSectionOpacity }}/>
   <Row styles={{paddingTop:'50px',paddingBottom:'50px',opacity: rowSectionOpacity }} >
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
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/'}>Home</Link></p>
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/ourApp'}>Our App</Link></p>
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/about'}>About us</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." sx={{marginTop:'20px',color:'white'}}/>
              <Button variant="outlined" sx={{margin:'20px',color:'white'}}>Send</Button>
   
              </Column>
             </Row>
             <Footer  styles={{ opacity: mainSectionOpacity }}><h4 style={{color:'rgb(0, 51, 102)'}}>Copyright @ Saim Shahzad</h4></Footer>
    </>
  }/>
   <Route path="/ourApp" element={
    <>
    <Navbar scrollToSection={scrollToSection} scrollToTop={scrollToTop} reference={reference}/>
   <OurApp/>
   <Row styles={{paddingTop:'50px',paddingBottom:'50px' }} >
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
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/'}>Home</Link></p>
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/ourApp'}>Our App</Link></p>
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/about'}>About us</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." sx={{marginTop:'20px',color:'white'}}/>
              <Button variant="outlined" sx={{margin:'20px',color:'white'}}>Send</Button>
   
              </Column>
             </Row>
             <Footer  ><h4 style={{color:'rgb(0, 51, 102)'}}>Copyright @ Saim Shahzad</h4></Footer>
    </>
  }/>

<Route path="/explore" element={
    <>
    <Navbar scrollToSection={scrollToSection} scrollToTop={scrollToTop} reference={reference}/>
   <MainSection/>
   <Row styles={{paddingTop:'50px',paddingBottom:'50px' }} >
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
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/'}>Home</Link></p>
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/ourApp'}>Our App</Link></p>
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/about'}>About us</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." sx={{marginTop:'20px',color:'white'}}/>
              <Button variant="outlined" sx={{margin:'20px',color:'white'}}>Send</Button>
   
              </Column>
             </Row>
             <Footer  ><h4 style={{color:'rgb(0, 51, 102)'}}>Copyright @ Saim Shahzad</h4></Footer>
    </>
  }/>
  
<Route path="/about" element={
    <>
    <Navbar scrollToSection={scrollToSection} scrollToTop={scrollToTop} reference={reference}/>
   <About/>
   <Row styles={{paddingTop:'50px',paddingBottom:'50px' }} >
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
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/'}>Home</Link></p>
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/ourApp'}>Our App</Link></p>
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/about'}>About us</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." sx={{marginTop:'20px',color:'white'}}/>
              <Button variant="outlined" sx={{margin:'20px',color:'white'}}>Send</Button>
   
              </Column>
             </Row>
             <Footer  ><h4 style={{color:'rgb(0, 51, 102)'}}>Copyright @ Saim Shahzad</h4></Footer>
    </>
  }/>
  
<Route path="/contactus" element={
    <>
    <Navbar scrollToSection={scrollToSection} scrollToTop={scrollToTop} reference={reference}/>
   <ContactUs/>
   <Row styles={{paddingTop:'50px',paddingBottom:'50px' }} >
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
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/'}>Home</Link></p>
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/ourApp'}>Our App</Link></p>
              <p><Link onClick={()=>{scrollToTop();scrollToSection(``);}} style={{textDecoration:'none',color:'aliceblue'}} to={'/about'}>About us</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." sx={{marginTop:'20px',color:'white'}}/>
              <Button variant="outlined" sx={{margin:'20px',color:'white'}}>Send</Button>
   
              </Column>
             </Row>
             <Footer  ><h4 style={{color:'rgb(0, 51, 102)'}}>Copyright @ Saim Shahzad</h4></Footer>
    </>
  }/>
</Routes></BrowserRouter>
  );
}

export default App;
