import f1quotes from '../images/f1quotesapi.png'
import timetrack from '../images/timetrack.png'
import pwdgenerator from '../images/pwdgenerator.png'

export function Projects(){

    const images = [f1quotes, timetrack, pwdgenerator]

    const projects = [
        {
            title: 'F1 drivers quotes API',
            image: images[0],
            link: 'https://rapidapi.com/aleixalguero0/api/f1-drivers-quotes/',
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
            link: 'https://github.com/stv-beep/nath',
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
            title: 'Random password generator',
            image: images[2],
            link: 'https://hacktoberfest-2022.vercel.app/entry/stv-beep',
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

                {projects.map((item, index) => {
                    return (
                        <a href={item.link} target="_blank" className="card overflow-hidden shadow-lg bg-neutral-50 rounded-2xl 
                            hover:bg-neutral-100 hover:scale-95 hover:shadow-yellow-100 hover:shadow-lg" key={index} rel="noreferrer">
                            <div>
                                <img className="aspect-video" src={item.image} alt={item.title} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 text-black">{item.title}</div>
                                    <p className="text-black text-base text-justify">
                                        {item.text}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-4">
                                    {item.languages.map(({ img, alt }) => {
                                        return (
                                            <img className="inline-block h-10 w-10 p-1 m-1 bg-slate-200 shadow-md rounded-sm" src={img} alt={alt} key={alt} />
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