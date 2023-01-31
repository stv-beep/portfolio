import f1quotes from '../images/f1quotesapi.png'
import timetrack from '../images/timetrack.png'
import textenhancer from '../images/textenhancer.png'
import pwdgenerator from '../images/pwdgenerator.png'

import CodeIcon from './Icons/CodeIcon'
import DemoIcon from './Icons/DemoIcon'

export function Projects(){

    const images = [f1quotes, timetrack, textenhancer, pwdgenerator]

    const projects = [
        {
            title: 'F1 drivers quotes API',
            image: images[0],
            demo: 'https://rapidapi.com/aleixalguero0/api/f1-drivers-quotes/',
            sourceCode: 'https://github.com/stv-beep/f1-quotes-api',
            text: 'An API that provides +5000 lines of quotes cited by +70 Formula 1 drivers and personalities. The user can request 10 F1-topic quotes, all the quotes of a driver, some quotes of a driver with pagination or a single quote if the quote ID is provided.',
            buttonText: 'RapidAPI',
            languages: [{ alt: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
                { alt: 'NodeJS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
                { alt: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'}],
            type: 'Backend'
        },
        {
            title: 'Employee hours tracking app',
            image: images[1],
            sourceCode: 'https://github.com/stv-beep/nath',
            text: 'Work hours registration application. Different shifts during the day and different tasks, each one with its registration. In addition, an administration and consultation area. Currently used in a company.',
            buttonText: 'Source code',
            languages: [{ alt: 'Laravel', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg'},
                { alt: 'JavaScript', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
                { alt: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg'},
                { alt: 'jQuery', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg'},
                { alt: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'}],
            type: 'Full Stack'
        },
        {
            title: 'Extreme text enhancer',
            image: images[2],
            demo: 'https://extreme-text-enhancer.vercel.app',
            sourceCode: 'https://github.com/stv-beep/extreme-text-enhancer',
            text: 'Beautify and enhance your text (using AI) as if it had been written by someone extremely cultured.',
            buttonText: 'Source code',
            languages: [{ alt: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
                { alt: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'}],
            type: 'Frontend'
        },
        {
            title: 'Random password generator',
            image: images[3],
            demo: 'https://hacktoberfest-2022.vercel.app/entry/stv-beep',
            sourceCode: 'https://github.com/stv-beep/password-generator',
            text: 'Simple, but effective random password generator.',
            buttonText: 'Source code',
            languages: [{ alt: 'Vue', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'},
                { alt: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'}],
            type: 'Frontend'
        }
    ]

    return (
        <section className="projects pt-20 2xl:mx-36 lg:mx-36 md:mx-0" id="projects">
            <h2 className="text-center text-2xl section-title">My projects</h2>

            <div className="lg:p-10 p-4 sm:m-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 
                gap-5 bg-gray-200 rounded-3xl shadow-xl">

                {projects.map((project, index) => {
                    return (
                        <section className="overflow-hidden shadow-lg bg-neutral-50 rounded-2xl" key={index}>
                            <div className='2xl:h-[28em] xl:h-[28em] lg:h-[28em] 3xl:h-[40em]'>
                                <img className="aspect-video" src={project.image} alt={project.title} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 text-black">{project.title}</div>
                                    <p className="text-black text-base 3xl:text-xl text-justify">
                                        {project.text}
                                    </p>
                                </div>
                            </div>
                            <div className="px-6 pt-4 pb-4">
                                {project.languages.map(({ img, alt }) => {
                                    return (
                                        <img className="inline-block h-10 w-10 p-1 m-1 bg-slate-200 shadow-md rounded-sm" src={img} alt={alt} key={alt} />
                                    )
                                })}
                            </div>
                            <div className='px-6 pt-4 pb-4 flex flex-row gap-3'>
                                <a href={project.sourceCode} target="_blank" className="float-right inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out hover:scale-95 hover:shadow-yellow-200 hover:text-yellow-300" rel="noreferrer"><CodeIcon/>Code</a>

                                <a href={project.demo} target="_blank" className={`float-right inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out hover:scale-95 hover:shadow-yellow-200 hover:text-yellow-300 ${project.demo === undefined ? 'pointer-events-none opacity-30' : ''}`}rel="noreferrer"><DemoIcon/>Demo</a>
                            </div>
                        </section>
                    )
                })}
            </div>
        </section>
    )
}
