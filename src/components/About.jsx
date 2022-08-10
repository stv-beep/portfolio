import { Fragment } from "react";
import '../App.css';
import avatar from '../jo5.png'

export function About(){
    return (
        <Fragment>
            <section id="about">
                <div className="full-width">
                    <div className="flex-row">
                        <div>
                            <div className="div-avatar">
                                <img className="avatar css-ghgpv1" src={avatar} alt="Aleix Algueró"/>
                                &nbsp;
                                <span className="social-links">
                                    <a href="https://www.linkedin.com/in/aleix-algueró-omedes-958974236/" target="_blank" className="btn">
                                        <i className="devicon-linkedin-plain"></i></a>
                                    <a href="https://github.com/stv-beep" target="_blank" className="btn"><i className="devicon-github-original"></i></a>
                                </span>
                            </div>
                        </div>
                        
                        <div className="about-info">
                            <div>
                                <div className="box">
                                    <div className="flex-row">
                                        <p className="montserrat text-cyan-50 font-extrabold">ALEIX ALGUERÓ</p>
                                        <span className="hover:text-red-600 text-cyan-50 font-medium italic">
                                            Desarrollador Web y Administrador de Sistemas</span>
                                    </div>
                                    <br/>
                                    <p className="text-lg montserrat text-white">
                                            Apasionado de la tecnología, empecé reparando ordenadores y 
                                            me di cuenta de que me encantaba. 
                                            Luego estudié Administración de Sistemas Informáticos en Red, 
                                            que también me gustó y más tarde Desarrollo de Aplicaciones Web, que me gustó 
                                            todavía más. Disfruto ayudando a la gente en las incidencias informáticas que 
                                            puedan tener o desarrollando sus sueños a través de una app.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </Fragment>
    )
}
