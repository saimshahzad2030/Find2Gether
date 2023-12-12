import React, { useState, useEffect, useRef } from 'react';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';
export default function Landing() {
  const [showDiv, setShowDiv] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    // Set a timeout to add the show class after a delay (e.g., 100 milliseconds)
    const timeoutId = setTimeout(() => {
      setShowDiv(true);
    }, 100);

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);
  const images = [
    process.env.PUBLIC_URL + '/Assets/carrousel/1.jpg', // Replace with the actual path to your images
    
    process.env.PUBLIC_URL + '/Assets/carrousel/2.jpg',
    
    process.env.PUBLIC_URL + '/Assets/carrousel/3.jpg',
  ];
const imgRef = useRef(null)
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current image index to the next one
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
       
      setTimeout(() => {
        imgRef.current.style.opacity = 0;
      }, 2500);
      imgRef.current.style.opacity = 1
    }, 3000); // Change the interval to 1000 milliseconds (1 second)

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [images.length]); // Ensure useEffect runs only when the length of images changes

  return (
    <div className={style.mainDiv}>
      <div className={style.firstChild}>
        <div  className={`${style.div} ${showDiv ? style.show : ''}`}></div>
        <h1 className={style.h1}>
          Easeness to find missing ones...
        </h1>
        <h2  className={style.h2}> We are here for you </h2>
        <p className={style.p}>It's hard to digest that in today's world the problem of people's missing is just taking over the world day by day and getting stronger we are here with a dynamic solution to fight against this</p>
      <div className={style.btnDiv}>
        <Link to={'/'}><button className={style.btn} >Get started</button></Link>
      </div>
      </div>
      <div className={style.secondChild}>
  <img ref={imgRef}
    className={`${style.image} `}
  
    src={images[currentImageIndex]}
    alt={`Slide ${currentImageIndex + 1}`}
  />
</div>
    </div>
  )
}
