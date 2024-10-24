// Export par défaut
import { useEffect, useState } from 'react';

import './index.css';

import Header from './components/header/header';
import Hero from './components/hero/hero';
import Main from './components/main/main';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Speaking from './components/speaking/speaking.';

function App() {
  const [showScrollBTN, setshowScrillBTN] = useState (false);
  useEffect (() =>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY >300){
        setshowScrillBTN(true)}
        else{
          setshowScrillBTN(false)
        }
    })
  }, []);
  
  return (
   <div id="up" className='container'>
   <Header />
   <div className='divider'/>
   <Hero/>
   <div className='divider'/>
   <Main/>
   <div className='divider'/>
   <Speaking/>
   <div className='divider'/>
   <Contact/>
   <div className='divider'/>
   <Footer/>

     <a style={{opacity: showScrollBTN? 1: 0 , transition: "1s"}}  href="#up">
     <button className='scroll2Top icon-chevron-circle-up'></button>
     </a>

   </div>
  )
}

export default App;
