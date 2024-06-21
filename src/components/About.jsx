import '../App.css';
import avatar from '../images/aleixalguero.webp'

export function About() {
    return (
        <section id="about" className='xs:mt-2'>
            <div className="full-width">
                
                <div className="flex-row s:flex-col items-center">
                    <div className="div-avatar">
                        <img className="rounded-lg m-auto border-solid border border-black/60 w-[270px] aspect-square mb-6" src={avatar} alt="Aleix Algueró" aria-label="Photo of Aleix." />

                        <ul className='flex flex-wrap gap-2 mt-4 social-links'>
                            <li>
                                <a href="https://www.linkedin.com/in/aleix-alguero-omedes" target="_blank" className="inline-flex items-center justify-center  text-xs font-semibold text-center text-teal-500 bg-transparent border border-teal-500/60 rounded-lg hover:bg-teal-500/20 md:text-sm transition duration-300 ease-in-out hover:shadow-sky/10 hover:shadow-lg" rel="noreferrer" aria-label="Linkedin"><i className="devicon-linkedin-plain"></i></a>
                            </li>
                            <li>
                                <a href="https://github.com/stv-beep" target="_blank" className="inline-flex items-center justify-center text-xs font-semibold text-center text-black bg-transparent border border-black/60 rounded-lg hover:bg-black/10 md:text-sm transition duration-300 ease-in-out hover:shadow-black/10 hover:shadow-lg" rel="noreferrer" aria-label="Github">
                                <i className="devicon-github-original"></i></a>
                            </li>
                            <li>
                                <button className="inline-flex items-center justify-center text-xs font-semibold text-center text-red-700 bg-transparent border border-red-700/60 rounded-lg hover:bg-red-600/20 md:text-sm transition duration-300 ease-in-out hover:shadow-red-700/10 hover:shadow-lg" onClick={() => window.open('../CV-Aleix-Alguero.pdf', '_blank')}>
                                CV</button>
                            </li>
                        </ul>
                    </div>

                    <article className="w-[50%] s:mt-8 s:w-[95%] xs:w-[100%] p-[42px] xs:p-[25px] rounded-3xl">
                        <h1 className="font-extrabold text-transparent s:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">ALEIX ALGUERÓ</h1>
                        <span className="font-medium s:text-xl md:text-lg lg:text-xl xl:text-2xl">
                                    Web Developer and SysAdmin</span>
                        <p className='italic text-xl lg:contrast-200 mt-1'>
                                "Always trying to improve myself and those around me."</p>
                            <br />
                        <p className="xl:text-lg md:text-base sm:text-base xs:text-base  aboutme mb-3">
                                A tech enthusiast who's all about making things work, whether it's the hardware or the software. Started out fixing tech as an IT technician, and now I'm immersed in the world of web development (+1 years of experience).
                        </p>
                        <p className="xl:text-lg md:text-base sm:text-base xs:text-base  aboutme">
                                I love tinkering with code and systems to create awesome online experiences. My passion lies in crafting cool digital solutions that work like a charm.
                        </p>
                    </article>

                </div>
            </div>
        </section>
    )
}
