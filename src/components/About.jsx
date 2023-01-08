import '../App.css';
import avatar from '../images/aleixalguero.png'
import ParticlesBG  from './ParticlesBG'
import 'atropos/css/min'
import Atropos from 'atropos/react';

export function About(){
    return (
            <section id="about">
                <div className="full-width">
                    <ParticlesBG/>
                    <div className="flex-row">
                        <div>
                            <div className="div-avatar">
                                <img className="rounded-full m-auto border-solid border-4 border-gray-100 w-[270px] aspect-square" src={avatar} alt="Aleix Algueró"/>
                                &nbsp;
                                <div className="p-2 bg-gray-200 rounded-lg mt-0">
                                    <span className="social-links">
                                        <a href="https://www.linkedin.com/in/aleix-alguero-omedes" target="_blank" className="btn">
                                            <i className="devicon-linkedin-plain"></i></a>
                                        <a href="https://github.com/stv-beep" target="_blank" className="btn"><i className="devicon-github-original"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <Atropos className="about-info">
                            <div className="box p-[40px] xs:p-[25px]">
                                <div className="py-3 lg:contrast-200">
                                    <p className="montserrat font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-600" data-atropos-offset='2'>ALEIX ALGUERÓ</p>
                                    <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-green-400" data-atropos-offset='4'>
                                    Web Developer and SysAdmin</span>
                                </div>
                                <p className='italic text-xl bg-clip-text text-transparent bg-gradient-to-r
                                    from-green-200 via-green-300 to-green-400 lg:contrast-200' data-atropos-offset='5'>
                                    "Always trying to improve myself and those around me."</p>
                                <br/>
                                <p className="xl:text-lg md:text-base sm:text-sm xs:text-sm xxs:text-[12px] montserrat text-white text-justify aboutme" data-atropos-offset='2'>
                                    Technology enthusiast. I started repairing computers and realized that I loved this. 
                                    Then I studied Computer Network Systems Administration and I also liked it, 
                                    and then Web Development, which I liked even more. I enjoy helping people 
                                    by solving IT problems that they may have or developing their ideas through an app.
                                </p>
                            </div>
                        </Atropos>
                    </div>
                </div>
            </section>
    )
}
