import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser'


const Contactame: React.FC = () => {
    
    const [mensajeEnviado, setMensajeEnviado] = useState<string | null>(null);
    const refForm = useRef<HTMLFormElement>(null);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { // Recibe el evento del formulario
        event.preventDefault();
        const serviceId = "service_0j5p4is";
        const templateId = "template_c2csmmu";
        const apikey = "FiOIebaYfaTGEnXXt";

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
            .then((result) => {
                console.log(result.text);
                setMensajeEnviado("Mensaje enviado exitosamente"); // Actualiza el estado después de enviar el formulario
            })
            .catch(error => console.log(error.message));
    }
    return (
        <div>
            <section className="bg-inherit">
                <div className=" cursor-default py-8 lg:py-16  mx-auto max-w-screen-md">
                    <h3 className='pt-[5vh] lg:text-[3em] text-[2em] font-medium text-gray-500 dark:text-gray-400 text-center'>Contactame </h3>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Te respondere lo mas antes posible o si tienes alguna sugerencia de que  mejorar, con gusto té tomare en cuenta</p>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl hover:text-green-500 cursor-pointer"><a href="https://wa.me/51916628409" ><i className="fa-brands fa-whatsapp mr-2"></i>+51 916628409</a></p>
                    {mensajeEnviado && <p className="text-center text-green-500">{mensajeEnviado}</p>}
                    <form onSubmit={handleSubmit} ref={refForm} action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Correo</label>
                            <input autoComplete="off" name='correo'  type="email" id="email" className="shadow-sm bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"   required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Nombre</label>
                            <input autoComplete="off" name='nombre' type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Asunto</label>
                            <textarea autoComplete="off" name='mensaje' id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" ></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center hover:text-white inset-0 bg-gray-800 hover:dark:bg-gray-600 rounded-full  w-auto bg-gray-800 text-gray-400 transition-all duration-3000 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contactame;
