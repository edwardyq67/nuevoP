import React, { useEffect, useState } from 'react';
import './index.css';
import './App.css'
import { InfiniteMovingCardsDemo } from './components/InfiniteMovingCardsDemo';

import { TabsDemo } from './components/TabsDemo';
import Inicio from './components/Inicio';
import Contactame from './components/Contactame';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 

  return (
    <div  className=''> 
    <nav>
      <ul style={{ position: "fixed", top: "0", zIndex: "9999" }} className={`bg-gray-800 text-slate-900 ${isMenuOpen ? 'grid' : 'hidden'} dark:text-gray-50 font-bold w-[100%] h-12 sm:flex hidden text-xs place-content-around sm:items-center`}>
        <li>
          <a href="#inicio" className='hover:text-gray-400 transition-all duration-3000'>Inicio</a>
        </li>
        <li>
          <a href="#conocimiento" className='hover:text-gray-400 transition-all duration-3000'>Conocimientos</a>
        </li>
        <li>
          <a href="#proyecto" className='hover:text-gray-400 transition-all duration-3000'>Proyectos</a>
        </li>
        <li>
          <a href="#contacto" className='hover:text-gray-400 transition-all duration-3000'>Contáctame</a>
        </li>
      </ul>
   
        <div style={{ position: "fixed", top: "0", zIndex: "9999" }}>
          <i onClick={toggleMobileMenu} className="w-[100vw] container px-4 mx-auto bg-gray-800 text-gray-200 fa-solid fa-bars sm:hidden flex flex-row-reverse text-[1.5em] h-12 items-center"></i>
       
        <ul className={`w-[100%]  bg-gray-900 text-gray-200 ${isMenuOpen ? 'block' : 'hidden'} sm:hidden text-center `}>
          <li className='h-[3vh] flex items-center justify-center'>
            <a href="#inicio" className='pt-1 hover:text-gray-400 '>Inicio</a>
          </li>
          <li className='h-[4vh] flex items-center justify-center'>
            <a href="#conocimiento"  className='pt-1 hover:text-gray-400 '>Conocimientos</a>
          </li>
          <li className='h-[4vh] flex items-center justify-center'>
            <a href="#proyecto" className='pt-1 hover:text-gray-400 '>Proyectos</a>
          </li>
          <li className='h-[4vh] flex items-center justify-center'>
            <a href="#contacto" className='pt-1 hover:text-gray-400 '>Contáctame</a>
          </li>
        </ul>
        
      </div>
    </nav>
      <section id='inicio'>
        <Inicio/>
      </section>
       
      <div className='pt-[2em] bg-gradient-to-b from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-950 px-4 '>
    <section id='conocimiento'>
        <h3 className='pt-[5vh] text-center lg:text-[3em] text-[2em] font-medium text-gray-500 dark:text-gray-400 relative'>
    Conocimientos 
    <span className="block absolute inset-x-0 bottom-0 h-[4px] bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-400"></span>
</h3>

      <InfiniteMovingCardsDemo/>
    </section>
    <section id='proyecto'>
       <h3 className='pt-[5vh] text-center lg:text-[3em] text-[2em] font-medium text-gray-500 dark:text-gray-400 relative'>
    Proyectos 
    <span className="block absolute inset-x-0 bottom-0 h-[4px] bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-400"></span>
</h3>   <TabsDemo/>
    </section>
      <section id='contacto'>
        <Contactame/>
      </section>
     
      
      </div>
    </div>
  );
};

export default App;