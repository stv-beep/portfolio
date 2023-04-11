import CodeIcon from './Icons/CodeIcon'
import DemoIcon from './Icons/DemoIcon'
import { projects } from './projectsData'
import Modal from './Modal'

export function Projects(){
    return (
        <section className="projects pt-20 2xl:mx-36 lg:mx-36 md:mx-0 mb-10" id="projects">
            <h2 className="text-center text-2xl section-title">Projects and works</h2>

            <div className="lg:p-10 p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 
                gap-5 bg-gray-200 rounded-3xl shadow-xl">

                {projects.map((project, index) => {
                    return (
                        <article className="overflow-hidden shadow-lg bg-neutral-50 rounded-2xl" key={index}>
                            <div className='2xl:h-[28em] xl:h-[28em] lg:h-[28em] 3xl:h-[35em]'>
                                <img className="aspect-video" src={project.image} alt={project.title} />
                                <div className="px-6 py-4">
                                    <h3 className="font-bold text-xl mb-2 text-black">{project.title}</h3>
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
                            </div>
                            <div className='px-6 pt-4 pb-4 flex flex-row gap-3'>
                                <a href={project.sourceCode} target="_blank" className="float-right inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out hover:scale-95 hover:shadow-yellow-200 hover:text-yellow-300" rel="noreferrer"><CodeIcon/>Code</a>
                                
                                { project.demo === undefined || project.demo === '' || project.carousel ? ( window.screen.width >= 768 ?(<Modal/>) : (<></>)) : 
                                (<a href={project.demo} target="_blank" className={`float-right inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out hover:scale-95 hover:shadow-yellow-200 hover:text-yellow-300 ${project.demo === undefined ? 'pointer-events-none opacity-30' : ''}`}rel="noreferrer"><DemoIcon/>Demo</a>)}
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
