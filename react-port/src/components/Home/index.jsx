// import LogoS from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import "./index.scss"
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import Logo2 from './Logo2';
import { useState,useEffect } from 'react';

const Home=()=>{
    const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ','b', 'h', 'a', 'v', 'y', 'a',' ','g','u','l','a','t','i',',']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

//   useEffect(() => {
//     return timeoutID=setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 4000)
//   }, [])
useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timeoutId); // Cleanup function to clear the timeout
  }, []);

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
            <h1>hi,<br />i'm  
            {/* <img src={LogoS} alt="developer" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={20}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={30}
            />
            </h1>
            <h2>Frontend Developer / C++ Programmer</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo2 />
            
        </div>
        <Loader type="pacman" />
        </>
    )
};

export default Home;