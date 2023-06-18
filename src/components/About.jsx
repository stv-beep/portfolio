import '../App.css';
import avatar from '../images/aleixalguero.webp'

export function About() {
    return (
        <section id="about">
            <div className="full-width">
                
                <div className="flex-row s:flex-col items-center">
                    <div>
                        <div className="div-avatar">
                            <img className="rounded-full m-auto border-solid border-4 border-white-rgba w-[270px] aspect-square mb-6" src={avatar} alt="Aleix Algueró" aria-label="Photo of Aleix." />
                            <div className="p-2 bg-white-rgba rounded-xl mt-0">
                                <span className="social-links gap-2">
                                    <a href="https://www.linkedin.com/in/aleix-alguero-omedes" target="_blank" className="btn" rel="noreferrer" aria-label="Linkedin">
                                        <i className="devicon-linkedin-plain"></i></a>
                                    <a href="https://github.com/stv-beep" target="_blank" className="btn" rel="noreferrer" aria-label="Github">
                                        <i className="devicon-github-original"></i></a>
                                    <button className="btn" onClick={() => window.open('../CV-Aleix-Alguero.pdf', '_blank')}>
                                        CV</button>
                                </span>
                            </div>
                        </div>
                    </div>

                    <article className="w-[50%] s:mt-8 s:w-[95%] xs:w-[100%] rounded-3xl">
                        <div className="box p-[42px] xs:p-[25px] rounded-3xl">
                            <div className="py-3 lg:contrast-200 rounded-3xl">
                                <p className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-400 s:text-6xl md:text-3xl lg:text-4xl xl:text-6xl">ALEIX ALGUERÓ</p>
                                <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 s:text-xl md:text-lg lg:text-xl xl:text-2xl">
                                    Web Developer and SysAdmin</span>
                            </div>
                            <p className='italic text-xl bg-clip-text text-transparent bg-gradient-to-r
                                    from-yellow-100 via-yellow-200 to-yellow-300 lg:contrast-200'>
                                "Always trying to improve myself and those around me."</p>
                            <br />
                            <p className="xl:text-lg md:text-base sm:text-base xs:text-base text-white aboutme">
                                A technology enthusiast passionate about hardware and software. Spent the last few years assisting 
                                in IT as a technician and now I am fully immersed in web development.
                            </p>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    )
}
