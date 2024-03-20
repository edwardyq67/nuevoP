import { useEffect, useState } from 'react';
import yo from "../Imagen/edward.png";
import "../App.css"
const Inicio = () => {
  const [color, setColor] = useState('#1f2937'); 

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      setColor('#111927');
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className='fondoInicio mx-auto pt-[5em]  h-[80vh] flex items-center justify-center'>
      <div className="grid grid-cols-4 gap-4 flex container mx-auto px-4">
        <div data-aos="fade-right" className=" cursor-default flex flex-col justify-center lg:items-start items-center lg:col-span-3 leading-normal col-span-4">
          <h5 className=' mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-gray-500 text-center'>DESARROLLADOR <label style={{whiteSpace: 'nowrap'}} htmlFor="">FRONT-END</label></h5>
          <p className='xl:w-[55vw] lg:w-[50vw] lg:text-start text-center mb-3 font-normal text-gray-200 dark:text-gray-300 '>
          Apasionado desarrollador Full Stack y amante de la tecnología. Mi enfoque principal es la parte FRONT-END, aprendo de manera autodidacta mejorando constantemente mis habilidades.
          </p>
        </div>
        <div className="lg:col-span-1 col-span-4 flex justify-end ">
          <div  data-aos="fade-up"
     data-aos-duration="3000"
      className=" relative top-[4em] mx-auto w-auto h-[70%] rounded-full bg-gray-600 dark:bg-gray-800" style={{ borderRadius: "38% 62% 38% 62% / 61% 41% 59% 39%",backgroundColor: color, transition: "background-color 1s cubic-bezier(0.42, 0, 0.58, 1)",}}>
            <div data-aos="zoom-in" data-aos-duration="2000" className='relative bottom-[4em] w-[20em] bg-contain bg-no-repeat object-cover bg-center lg:h-[40vh] h-[40vh]' style={{ backgroundImage: `url(${yo})`}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
