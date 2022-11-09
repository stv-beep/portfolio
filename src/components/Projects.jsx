import initlab from '../images/initlab.png'
import f1quotes from '../images/f1quotesapi.png'
import timetrack from '../images/timetrack.png'
import portfolio from '../images/portfolio.png'
import pwdgenerator from '../images/pwdgenerator.png'
import kimiquotes from '../images/kimiquotes.png'

export function Projects(){

    const projects = [
        {
            title: 'Initlab',
            image: '/static/media/initlab.f9380e64d40b8f506998.png',
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
            image: '/static/media/f1quotesapi.f4fe933454f0a398b165.png',
            link: 'https://rapidapi.com/aleixalguero0/api/f1-drivers-quotes/',
            text: 'An API that provides +5000 lines of quotes cited by numerous Formula 1 drivers and personalities. The user can request 10 F1-topic quotes, all the quotes of a driver, some quotes of a driver with pagination or a single quote if the quote ID is provided.',
            buttonText: 'RapidAPI',
            languages: [{ alt: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
                { alt: 'NodeJS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
                { alt: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'}],
            type: 'Backend'
        },
        {
            title: 'Employee hours tracking app',
            image: '/static/media/timetrack.06a0b68fb11258c7d92a.png',
            link: 'https://github.com/stv-beep/nath',
            text: 'Work hours registration application. Different shifts during the day and different tasks, each one with its registration. In addition, an administration and consultation area. Currently used in a company.',
            buttonText: 'Source code',
            languages: [{ alt: 'Laravel', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg'},
                { alt: 'JavaScript', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
                { alt: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg'},
                { alt: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'}],
            type: 'Full Stack'
        },
        {
            title: 'This portfolio',
            image: '/static/media/portfolio.d42e24ce1b85c44b36a2.png',
            link: 'https://github.com/stv-beep/portfolio',
            text: 'My portfolio. The website you are on right now.',
            buttonText: 'Source code',
            languages: [{ alt: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
                { alt: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'}],
            type: 'Frontend'
        },
        {
            title: 'Random password generator',
            image: '/static/media/pwdgenerator.74fe895f54c3239b3a0e.png',
            link: 'https://hacktoberfest-2022.vercel.app/entry/stv-beep',
            text: 'Simple, but effective random password generator.',
            buttonText: 'Source code',
            languages: [{ alt: 'Vue', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'},
                { alt: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'}],
            type: 'Frontend'
        },
        {
            title: 'Kimi Räikkönen Quotes',
            image: '/static/media/kimiquotes.913c928c464f202718f1.png',
            link: 'https://github.com/stv-beep/Vue-PublicAPI',
            text: 'Funny app which shows the best quotes said by Finnish former Formula 1 driver Kimi Räikkönen during race or at interviews.',
            buttonText: 'Source code',
            languages: [{ alt: 'Vue', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'}],
            type: 'Frontend'
        },
    ]


    return (
            <section className="projects pt-36 2xl:mx-36 lg:mx-36 md:mx-0" id="projects">
                <h2 className="text-center text-2xl section-title">My projects</h2>
                
                <div className="lg:p-10 p-4 sm:m-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 
                gap-5 bg-gray-200 rounded-3xl shadow-xl">
        
                    {projects.map((item, index) => {
                        return (
                            <a href={item.link} target="_blank" className="card overflow-hidden shadow-lg bg-neutral-50 rounded-2xl 
                            hover:bg-neutral-100 hover:scale-95 hover:shadow-green-100 hover:shadow-lg" key={index}>
                            <div>
                                <img className="w-full h-full" src={item.image} alt={item.title}/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 text-black">{item.title}</div>
                                    <p className="text-black text-base text-justify">
                                    {item.text}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-4">
                                    {item.languages.map(({img, alt}) => {
                                        return (
                                            <img className="inline-block h-10 w-10 p-1 m-1 bg-slate-200 shadow-md rounded-sm" src={img} alt={alt} key={alt}/>
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