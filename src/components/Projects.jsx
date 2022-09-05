import initlab from '../images/initlab.png'
import f1quotes from '../images/f1quotesapi.png'
import kimiquotes from '../images/kimiquotes.png'
import timetrack from '../images/timetrack.png'

export function Projects(){

    const projects = [
        {
            title: 'Initlab',
            image: '/static/media/initlab.2830e0725ae04828082e.png',
            link: 'https://www.initlab.cat',
            text: 'An app for managing a fab lab. It is a platform and a meeting point of talented people and revolutionary ideas from our region. A place to share and have access to manufacturing tools to facilitate the work of manufacturing physical items. A training space for young and old. Meeting point of society, industry and education.',
            buttonText: 'Demo',
            languages: [{ alt: 'Laravel', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg'},
                { alt: 'Vue', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'},
                { alt: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg'},
                { alt: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'}],
            type: 'Full Stack'
        },
        {
            title: 'F1 drivers quotes API',
            image: '/static/media/f1quotesapi.e7267d8e4e7be91ff76b.png',
            link: 'https://rapidapi.com/aleixalguero0/api/f1-drivers-quotes/',
            text: 'An API that provides +3500 lines of quotes said by numerous Formula 1 drivers.',
            buttonText: 'RapidAPI',
            languages: [{ alt: 'NodeJS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
                { alt: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'}],
            type: 'Backend'
        },
        {
            title: 'Kimi Räikkönen Quotes',
            image: '/static/media/kimiquotes.1c491fb3a9e6eee64ea3.png',
            link: 'https://github.com/stv-beep/Vue-PublicAPI',
            text: 'Simple, but funny app which shows the best quotes said by Finnish former Formula 1 driver Kimi Räikkönen during race or at interviews.',
            buttonText: 'Source code',
            languages: [{ alt: 'Vue', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'}],
            type: 'Frontend'
        },
        {
            title: 'Input and tracking working time app',
            image: '/static/media/timetrack.ebc0ae822cc5f4748b96.png',
            link: 'https://github.com/stv-beep/nath',
            text: 'Working time, shifts and tracking app currently used in a company.',
            buttonText: 'Source code',
            languages: [{ alt: 'Laravel', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg'},
                { alt: 'JavaScript', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
                { alt: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg'},
                { alt: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'}],
            type: 'Full Stack'
        }
    ]




    return (
            <section className="projects pt-36 2xl:mx-36 lg:mx-36 md:mx-0" id="projects">
                <h2 className="text-center text-2xl section-title">My projects</h2>
                
                <div className="p-10 sm:m-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 
                gap-5 bg-gray-200 rounded-3xl shadow-xl">
        
                    {projects.map((item, index) => {
                        return (
                            <a href={item.link} target="_blank" className="card overflow-hidden shadow-lg bg-neutral-50 rounded-2xl 
                            hover:bg-neutral-100 hover:scale-105 hover:shadow-green-100 hover:shadow-lg">
                            <div key={index}>
                                <img className="w-full" src={item.image} alt={item.title}/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 text-black">{item.title}</div>
                                    <p className="text-black text-base text-justify">
                                    {item.text}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-4">
                                    {item.languages.map(({img, alt}) => {
                                        return (
                                            <img className="inline-block h-10 w-10 p-1 m-1 bg-slate-200 shadow-md rounded-sm" src={img} alt={alt}/>
                                            )
                                    })}
                                    <p className="projectType text-right">{item.type}</p>
                                </div>
                            </div>
                            </a>
                        )
                    })}
                </div>

            </section>
    )
}