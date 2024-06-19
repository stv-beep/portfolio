import CodeIcon from './Icons/CodeIcon'
import DemoIcon from './Icons/DemoIcon'
import { projects } from './projectsData'
import Modal from './Modal'
import { SectionTitle } from './SectionTitle'

export function Projects(){
    return (
        <section className="projects pt-20 2xl:mx-36 lg:mx-36 md:mx-0 mb-10" id="projects">
            <SectionTitle title="Projects and works"/>

            <div className="lg:p-10 p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 
                gap-5 rounded-3xl shadow-xl">

                {projects.map((project, index) => {
                    return (
                        <article className="rounded-2xl" key={index}>
                            <div className='2xl:h-[28em] xl:h-[28em] lg:h-[28em] 3xl:h-[35em]'>
                                <a href={project.demo}><img className="aspect-video rounded-lg transition duration-300 ease-in-out hover:scale-105" src={project.image} alt={project.title} /></a>
                                <div className="px-6 py-4">
                                    <h3 className="font-bold text-3xl mb-2 text-black"><a className='hover:text-teal-500 transition ease-in-out' href={project.demo}>{project.title}</a></h3>
                                    <p className="text-black text-base 3xl:text-xl">
                                        {project.text}
                                    </p>
                                </div>
                            </div>
                            <div className="px-6 pt-4 pb-4">
                                {project.languages.map(({ img, alt }) => {
                                    return (
                                        <div key={alt} data-title={alt} className="inline-block">
                                            <img className="h-10 w-10 p-1 my-1 mr-1 bg-slate-200 shadow-md rounded-sm" src={img} alt={alt}/>
                                        </div>       
                                    )
                                })}
                                

                                <ul className='flex flex-wrap gap-2 mt-4'>
                                    {project.sourceCode === undefined ? (<></>) : (<li><a href={project.sourceCode} target="_blank" className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-center text-black bg-transparent border border-black/60 rounded-lg hover:bg-black/10 md:text-sm transition duration-300 ease-in-out hover:shadow-black/10 hover:shadow-lg" rel="noreferrer"><CodeIcon/>Code</a></li>) }
                                    
                                    
                                    { project.demo === undefined || project.demo === '' || project.carousel ? ( window.screen.width >= 991 ?(<li><Modal/></li>) : (<></>)) : 
                                    (<li><a href={project.demo} target="_blank" className={`inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-center text-teal-500 bg-transparent border border-teal-500/60 rounded-lg hover:bg-teal-500/20 md:text-sm transition duration-300 ease-in-out hover:shadow-sky/10 hover:shadow-lg ${project.demo === undefined ? 'pointer-events-none opacity-30' : ''}`}rel="noreferrer"><DemoIcon/>Demo</a></li>)}
                                </ul>
                            </div>
                            
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
