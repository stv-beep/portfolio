import initlab from '../images/initlab.png'
import f1quotes from '../images/f1quotesapi.png'

export function Projects(){
    return (
            <section className="projects" id="projects">
                <h2 className="text-center text-2xl section-title">Mis proyectos</h2>
                
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-gray-900 rounded-2xl shadow-xl">
        
                        <div className="rounded overflow-hidden shadow-lg bg-gray-700">
                        <a href="https://www.initlab.cat" target="_blank"><img className="w-full" src={initlab} alt="Initlab.cat"></img></a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-white">Initlab</div>
                            <p className="text-white text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            
                            <img className="inline-block h-10 w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
                            <img className="inline-block h-10 w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
          
                            <a href="https://www.initlab.cat" target="_blank"><button className='button2 float-right'>Demo</button></a>
                        </div>
                        </div>
                        
                        <div className="rounded overflow-hidden shadow-lg bg-gray-700">
                        <a href="https://rapidapi.com/aleixalguero0/api/f1-drivers-quotes/" target="_blank"><img className="w-full" src={f1quotes} alt="F1 drivers quotes API"></img></a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-white">F1 drivers quotes API</div>
                            <p className="text-white text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            
                            <img className="inline-block h-10 w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                            <img className="inline-block h-10 w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                            
                            <a href="https://rapidapi.com/aleixalguero0/api/f1-drivers-quotes/" target="_blank"><button className='button2 float-right'>RapidAPI</button></a>
                        </div>
                        </div>

                        
                        <div className="rounded overflow-hidden shadow-lg bg-gray-700">
                        <img className="w-full" src={initlab} alt=""></img>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-white">Kimi Räikkönen Quotes</div>
                            <p className="text-white text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <img className="inline-block h-10 w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                            
                        </div>
                        </div>
                </div>

            </section>
            
    )
}