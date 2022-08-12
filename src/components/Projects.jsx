import initlab from '../images/initlab.png'
import f1quotes from '../images/f1quotesapi.png'
import kimiquotes from '../images/kimiquotes.png'

export function Projects(){

    const projects = [
        {
            title: 'Initlab',
            image: '/static/media/initlab.2830e0725ae04828082e.png',
            link: 'https://www.initlab.cat',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            buttonText: 'Demo',
            languages: [{ alt: 'Laravel', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg'},
                { alt: 'Vue', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'},
                { alt: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg'}]
        },
        {
            title: 'F1 drivers quotes API',
            image: '/static/media/f1quotesapi.e7267d8e4e7be91ff76b.png',
            link: 'https://rapidapi.com/aleixalguero0/api/f1-drivers-quotes/',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            buttonText: 'RapidAPI',
            languages: [{ alt: 'NodeJS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
                { alt: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'}]
        },
        {
            title: 'Kimi Räikkönen Quotes',
            image: '/static/media/kimiquotes.1c491fb3a9e6eee64ea3.png',
            link: 'https://github.com/stv-beep/Vue-PublicAPI',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            buttonText: 'Código fuente',
            languages: [{ alt: 'Vue', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'}]
        }
    ]




    return (
            <section className="projects pt-36" id="projects">
                <h2 className="text-center text-2xl section-title">Mis proyectos</h2>
                
                <div className="p-10 sm:m-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-gray-200 rounded-3xl shadow-xl">
        
                    {projects.map((item, index) => {
                        return (
                            <div key={index} className="overflow-hidden shadow-lg bg-neutral-50 rounded-2xl">
                                <a href={item.link} target="_blank"><img  className="w-full" src={item.image} alt={item.title}/></a>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 text-black">{item.title}</div>
                                    <p className="text-black text-base">
                                    {item.text}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                {item.languages.map(({img, alt}) => {
                                    return (
                                        <img className="inline-block h-10 w-10" src={img} alt={alt}/>
                                    )
                                })}
                                <a href={item.link} target="_blank"><button className='button2 float-right'>{item.buttonText}</button></a>
                                </div>
                            </div>
                        )
                    })}




                    {/* <div className="rounded overflow-hidden shadow-lg bg-neutral-50">
                    <a href="https://www.initlab.cat" target="_blank"><img className="w-full" src={initlab} alt="Initlab.cat"></img></a>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-black">Initlab</div>
                        <p className="text-black text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        
                        <img className="inline-block h-10 w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
                        <img className="inline-block h-10 w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                        <img className="inline-block h-10 w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
        
                        <a href="https://www.initlab.cat" target="_blank"><button className='button2 float-right'>Demo</button></a>
                    </div>
                    </div>
                    
                    <div className="rounded overflow-hidden shadow-lg bg-neutral-50">
                    <a href="https://rapidapi.com/aleixalguero0/api/f1-drivers-quotes/" target="_blank"><img className="w-full" src={f1quotes} alt="F1 drivers quotes API"></img></a>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-black">F1 drivers quotes API</div>
                        <p className="text-black text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        
                        <img className="inline-block h-10 w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <img className="inline-block h-10 w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        
                        <a href="https://rapidapi.com/aleixalguero0/api/f1-drivers-quotes/" target="_blank"><button className='button2 float-right'>RapidAPI</button></a>
                    </div>
                    </div>

                    
                    <div className="rounded overflow-hidden shadow-lg bg-neutral-50">
                    <img className="w-full" src={kimiquotes} alt="Kimi Raikkonen Quotes"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-black">Kimi Räikkönen Quotes</div>
                        <p className="text-black text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <img className="inline-block h-10 w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                        <a href="https://github.com/stv-beep/Vue-PublicAPI" target="_blank"><button className='button2 float-right'>Código fuente</button></a>
                    </div>
                    </div> */}
                </div>

            </section>
            
    )
}