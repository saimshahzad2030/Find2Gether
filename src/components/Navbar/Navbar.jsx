import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import {FaBars} from 'react-icons/fa'
export default function Navbar({setType,reference,scrollToSection,scrollToTop}) {
  
  const [scrolled, setScrolled] = React.useState(false);
    // const scrollToSection = (id) => {
    //     const element = document.getElementById(id);
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //         const screenWidth = window.innerWidth;
    //         if (screenWidth >= 760) {
    //             reference.current.style.display = 'flex';
    //         }
    //         else{
                
    //             reference.current.style.display = 'none';
    //         }
    //     }
    // };
    
    // const scrollToTop = () => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    //     const screenWidth = window.innerWidth;
    //     if (screenWidth >= 750) {
    //         reference.current.style.display = 'flex';
    //     }
    //     else{
            
    //         reference.current.style.display = 'none';
    //     }
    // };
    // const reference = React.useRef('saim')
    const [display,setDisplay] = React.useState(null)
    

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
   
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const clickHandler = ()=>{
        if (display === 'flex') {
            reference.current.style.display = 'none';
            setDisplay('none');
        } else {
            reference.current.style.display = 'flex';
            setDisplay('flex');
        }


    

    }
    React.useEffect(()=>
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

  return (
   <nav className={`${style.nav} ${scrolled ? style.scrolled : ''}`}>
    <div className={style.logoDiv}>
        <Link to={'/'}>  <img className={style.logo} src={process.env.PUBLIC_URL + '/Assets/logo/logo.png'} alt="Logo" />
       </Link>
       <button className={style.hideButton} onClick={clickHandler}>
        <FaBars size={30} />
        </button>
    </div>
   <div ref={reference} className={style.linkDiv}>
   <ul className={`${style.nav_ul} ${style.links}`}>
          <li><Link  className={style.link}  onClick={()=>{ scrollToTop();scrollToSection(``)}}to={'/'}>Home</Link></li>
          <li><Link  className={style.link}  onClick={()=>{ scrollToTop();scrollToSection(``)}} to={'/ourApp'}>Our App</Link>
          
          </li>
          <li><Link  className={style.link}  onClick={()=>{ scrollToTop();scrollToSection(``)}} 
       to={'/explore'}>Explore</Link>
              
          </li>
          <li><Link  className={style.link}  onClick={()=>{ scrollToTop();scrollToSection(``)}} to={'/about'}>About</Link></li>
          <li><Link  className={style.link}  onClick={()=>{ scrollToTop();scrollToSection(``)}} to='/contactus'>Contact us</Link></li>
         

        </ul>
        <ul className={`${style.btn_ul}`}>
    <Link to={'/login'}  onClick={()=>{ scrollToTop();scrollToSection(`login`);setType('Login')}}><Button variant="outlined"  sx={{ marginLeft:'10px',
    fontWeight:'bold',
    color:'rgb(0, 51, 102)',
    border:'2px rgb(0, 51, 102) solid',
    width:'80px'}}>Login</Button></Link>
    <Link  to={'/signin'}  onClick={()=>{ scrollToTop();scrollToSection(`signin`);setType('Sign up')}}><Button variant="outlined"sx={{ marginLeft:'10px',
    fontWeight:'bold',
    color:'rgb(0, 51, 102)',
    border:'2px rgb(0, 51, 102) solid',
    width:'80px'}}>Signup</Button></Link>
    </ul>
   </div>

   </nav>
  )
}
