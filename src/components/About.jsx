import { Fragment } from "react";
import '../App.css';
import me from '../jo5.png'

export function About(){
    return (
        <Fragment>
            <section className="container mx-auto p-10 lg:p-0 lg:pt-20 lg:pb-20" id="about">

            <div className="container mx-auto mt-5 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">

                <div className="intro">
                    <p className="text-3xl font-bold underline">HOLA 😎, SOY ALEIX ALGUERÓ</p>
                    <p className="">Desarollador Web y Administrador de Sistemas</p>
                    <p className="aboutMe">
                        Apasionado de la tecnología, empecé reparando ordenadores y 
                        me di cuenta de que me encantaba. 
                        Luego estudié Administración de Sistemas Informáticos en Red, 
                        que también me gustó y más tardé Desarrollo de Aplicaciones Web, que me gustó 
                        todavía más. Disfruto ayudando a la gente en las incidencias informáticas que 
                        puedan tener o desarrollando sus sueños a través de una app.
                    </p>
                
                </div>
                <div className="myPhoto"><img className="me" src={me}/>
                </div>
            
                </div>
            </div>

                    

                    

            </section>
            
        </Fragment>
    )
}