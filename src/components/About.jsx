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
                                <img className="avatar css-ghgpv1" src={avatar} alt="Aleix Algueró"/>
                                &nbsp;
                                <div className=' p-2 bg-gray-300 rounded-lg mt-0'>
                                    <span className="social-links">
                                    
                                        <a href="https://www.linkedin.com/in/aleix-algueró-omedes-958974236/" target="_blank" className="btn">
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
                                        <p className="montserrat text-cyan-50 font-extrabold">ALEIX ALGUERÓ</p>
                                        <span className="hover:text-green-700 text-cyan-50 font-medium">
                                        Web Developer and SysAdmin</span>
                                    </div>
                                    <br/>
                                    <p className="text-lg montserrat text-white">
                                            Technology enthusiast, I started reparing computers and I realised that I loved this.
                                            Then, I studied Administration of Computer Network Systems and I also liked it, and,
                                            later, Web Development, which I liked even more. I enjoy helping people with computer 
                                            incidents that their may have or developing their dreams through an app.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
