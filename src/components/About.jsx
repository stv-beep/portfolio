import '../App.css';
import avatar from '../images/aleixalguero.png'
import ParticlesBG  from './ParticlesBG'

export function About(){
    return (
            <section id="about">
                <div className="full-width">
                    <ParticlesBG/>
                    <div className="flex-row">
                        <div>
                            <div className="div-avatar">
                                <img className="avatar css-ghgpv1" src={avatar} alt="Aleix Algueró" rel="preload"/>
                                &nbsp;
                                <div className="p-2 bg-gray-300 rounded-lg mt-0">
                                    <span className="social-links">
                                        <a href="https://www.linkedin.com/in/aleix-alguero-omedes" target="_blank" className="btn">
                                            <i className="devicon-linkedin-plain"></i></a>
                                        <a href="https://github.com/stv-beep" target="_blank" className="btn"><i className="devicon-github-original"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="about-info">
                            <div>
                                <div className="box">
                                    <div className="py-3">
                                        <p className="montserrat font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-600">ALEIX ALGUERÓ</p>
                                        <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-green-400">
                                        Web Developer and SysAdmin</span>
                                    </div>
                                    <p className='italic text-xl bg-clip-text text-transparent bg-gradient-to-r
                                     from-green-200 via-green-300 to-green-400'>
                                        "Always trying to improve myself and those around me."</p>
                                    <br/>
                                    <p className="text-lg montserrat text-white text-justify">
                                        Technology enthusiast. I started repairing computers and realized that I loved this. 
                                        Then I studied Computer Network Systems Administration and I also liked it, 
                                        and then Web Development, which I liked even more. I enjoy helping people 
                                        by solving IT problems that they may have or developing their ideas through an app.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
