import { useEffect, useState } from "react";
import { Tabs } from "./ui/tabs";
import axios from "axios";

interface IconData {
    id: number;
    url: string;
}

interface ProyectoData {
    id: number;
    titulo: string;
    parrafo: string;
    imgProyectosFrontEnd: {
        urlFrontEnd: string;
        urlGitHub: string;
        urlImagen: string;
    };
    imgProyectoBackEnd: {
        urlGitHub: string;
        urlImagen: string;
    };
    lenguajes: IconData[];
}

interface FrontEndProps {
    urlWeb: string;
    urlGithubF: string;
}

interface BackEndProps {
    urlGithubB: string;
}

export function TabsDemo() {
    const [informacionProyecto, setInformacionProyecto] = useState<ProyectoData[]>([]);

    useEffect(() => {
        axios.get<ProyectoData[]>("http://soloportafolio-dev-bqsp.3.us-1.fl0.io/informacionProyect")
            .then(res =>
                setInformacionProyecto(res.data)
            );
    }, []);

    const onMouseEn = () => {
        const imgM = document.getElementById('imgM');
        if (imgM) {
            imgM.classList.remove('opacity-0');
            imgM.classList.add('opacity-1');
        }
    };

    const onMouseLe = () => {
        const imgM = document.getElementById('imgM');
        if (imgM) {
            imgM.classList.remove('opacity-1');
            imgM.classList.add('opacity-0');
        }
    };

    const tabs = (urlWeb: string, urlGithubF: string, urlF: string, urlGithubB: string, urlB: string) => [
        {
            title: "FRONT-END",
            value: "product",
            content: (
                <div className="frontEnd w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white" style={{ backgroundImage: `url('${urlF}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div id="imgM" className="  opacity-0 h-full" onMouseEnter={() => onMouseEn()} onMouseLeave={() => onMouseLe()}>
                        <FrontEnd urlWeb={urlWeb} urlGithubF={urlGithubF} />
                    </div>
                </div>
            ),
        },
        {
            title: "BACK-END",
            value: "services",
            content: (
                <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white" style={{ backgroundImage: `url('${urlB}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div id="imgM" className="  opacity-0 h-full" onMouseEnter={() => onMouseEn()} onMouseLeave={() => onMouseLe()}>
                        <BackEnd urlGithubB={urlGithubB} />
                    </div>

                </div>
            ),
        }
    ];

    return (
        <div className="pb-4 ">
            {informacionProyecto.map(infoP => (
                <div key={infoP.id} className="flex flex-col bg-inherit rounded-b-lg items-center gap-4 lg:my-[4em] my-[3em] rounded-xl shadow-md md:flex-row container mx-auto">

                    <div className="flex flex-col justify-between leading-normal">
                        <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-600 dark:text-gray-400">{infoP.titulo}</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-200">{infoP.parrafo}</p>
                        <div className="w-full grid  xl:grid-cols-5 gap-1 my-4 lg:grid-cols-4 grid-cols-3 ">
                            {infoP.lenguajes.map(iconL => (
                                <img key={iconL.id} className="w-[3em]  mx-auto mb-4" src={iconL.url} alt="" />
                            ))}
                        </div>
                    </div>
                    <div className="h-[15rem] md:h-[25rem] [perspective:1000px] relative b flex flex-col max-w-2xl mx-auto w-full  items-start justify-start my-10">
                        <Tabs tabs={tabs(infoP.imgProyectosFrontEnd.urlFrontEnd, infoP.imgProyectosFrontEnd.urlGitHub, infoP.imgProyectosFrontEnd.urlImgen, infoP.imgProyectoBackEnd.urlGitHub, infoP.imgProyectoBackEnd.urlImagen)} />
                    </div>
                </div>
            ))}
        </div>
    );

}

const FrontEnd = ({ urlWeb, urlGithubF }: FrontEndProps) => {
    return (
        <div className="flex rounded-lg justify-center items-center h-full justify-evenly transition duration-300 bg-[rgba(0,0,0,0.3)]">

            <a href={urlWeb} target="_blank"> <i className="hover:text-[white] text-zinc-400 transition-all  text-[1.5em] fa-solid fa-eye"></i></a>
            <a href={urlGithubF} target="_blank"><i className="hover:text-[white] text-zinc-400 transition-all  text-[1.5em] fa-brands fa-github"></i></a>
        </div>

    );
};

const BackEnd = ({ urlGithubB }: BackEndProps) => {

    return (
        <div className="flex rounded-lg  justify-center items-center h-full justify-evenly transition duration-300 bg-[rgba(0,0,0,0.3)]">

            <a href={urlGithubB} target="_blank"><i className="hover:text-[white] text-zinc-400 transition-all  text-[1.5em] fa-brands fa-github"></i></a>
        </div>


    );
}
