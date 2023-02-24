import '../App.css';
import avatar from '../images/aleixalguero.webp'
import ParticlesBG from './ParticlesBG'

export function About() {
    return (
        <section id="about">
            <div className="full-width">
                <ParticlesBG />
                <div className="flex-row s:flex-col items-center">
                    <div>
                        <div className="div-avatar">
                            <img className="rounded-full m-auto border-solid border-4 border-gray-200 w-[270px] aspect-square mb-6" src={avatar} alt="Aleix Algueró" aria-label="Photo of Aleix." />
                            <div className="p-2 bg-gray-200 rounded-xl mt-0">
                                <span className="social-links gap-2">
                                    <a href="https://www.linkedin.com/in/aleix-alguero-omedes" target="_blank" className="btn" rel="noreferrer" aria-label="Linkedin">
                                        <i className="devicon-linkedin-plain"></i></a>
                                    <a href="https://github.com/stv-beep" target="_blank" className="btn" rel="noreferrer" aria-label="Github">
                                        <i className="devicon-github-original"></i></a>
                                    <button className="btn" onClick={() => window.open('../CV-Aleix-Alguero.pdf', '_blank')}>
                                        My CV</button>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[50%] s:mt-8 s:w-[95%] xs:w-[100%] rounded-3xl">
                        <div className="box p-[40px] xs:p-[25px] rounded-3xl">
                            <div className="py-3 lg:contrast-200 rounded-3xl">
                                <p className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-400">ALEIX ALGUERÓ</p>
                                <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300">
                                    Web Developer and SysAdmin</span>
                            </div>
                            <p className='italic text-xl bg-clip-text text-transparent bg-gradient-to-r
                                    from-yellow-100 via-yellow-200 to-yellow-300 lg:contrast-200'>
                                "Always trying to improve myself and those around me."</p>
                            <br />
                            <p className="xl:text-lg md:text-base sm:text-sm xs:text-sm xxs:text-[12px] text-white aboutme">
                                Technology enthusiast. I like hardware, I love software, and I'm always open to learn new technologies. I'm a team player and I enjoy working like that.
                                I enjoy helping people by solving IT problems that they may have or developing their ideas through an app.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
