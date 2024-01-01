import f1quotes from '../images/f1quotesapi.png'
import timetrack from '../images/timetrack.png'
import textenhancer from '../images/textenhancer.png'
import pwdgenerator from '../images/pwdgenerator.png'
import realestate from '../images/realestatelanding.webp'

const images = [f1quotes, timetrack, textenhancer, pwdgenerator, realestate]

export const projects = [
    {
        title: 'F1 drivers quotes API',
        image: images[0],
        demo: 'https://rapidapi.com/aleixalguero0/api/f1-drivers-quotes/',
        sourceCode: 'https://github.com/stv-beep/f1-quotes-api',
        text: 'An API that provides +5000 lines of quotes cited by +70 Formula 1 drivers and personalities. The user can request 10 F1-topic quotes, all the quotes of a driver, some quotes of a driver with pagination or a single quote if the quote ID is provided.',
        languages: [{ alt: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
            { alt: 'NodeJS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
            { alt: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'}],
        type: 'Backend'
    },
    {
        title: 'Employee hours tracking app',
        image: images[1],
        sourceCode: 'https://github.com/stv-beep/nath',
        text: 'Work hours registration application for a company of clothing storage and distribution. Different shifts during the day and different tasks, each one with its registration. In addition, an administration and consultation area. Currently used in a company.',
        languages: [{ alt: 'Laravel', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg'},
            { alt: 'JavaScript', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
            { alt: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg'},
            { alt: 'jQuery', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg'},
            { alt: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'}],
        type: 'Full Stack',
        carousel: true
    },
    {
        title: 'Extreme text enhancer',
        image: images[2],
        demo: 'https://extreme-text-enhancer.vercel.app',
        sourceCode: 'https://github.com/stv-beep/extreme-text-enhancer',
        text: `An app that beautifies and enhances the user's input (using AI) as if it had been written by someone very formal and cultured. For example: "I like the chocolate." can be "I am fond of the confectionery known as chocolate."`,
        languages: [{ alt: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
            { alt: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'}],
        type: 'Frontend'
    },
    {
        title: 'Random password generator',
        image: images[3],
        demo: 'https://hacktoberfest-2022.vercel.app/entry/stv-beep',
        sourceCode: 'https://github.com/stv-beep/password-generator',
        text: 'Simple, but effective random password generator. Where the user can select the length of the password.',
        languages: [{ alt: 'Vue', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'},
            { alt: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'}],
        type: 'Frontend'
    },
    {
        title: 'Real Estate landing page',
        image: images[4],
        demo: 'https://quechuan-positions.000webhostapp.com',
        text: 'Straightforward Real Estate landing page made with Elementor website builder.',
        languages: [{ alt: 'WordPress', img: 'https://raw.githubusercontent.com/pheralb/svgl/8df82e2e2aeeda02d6c858ad752a6cb044d4954a/static/library/wordpress.svg'},
            { alt: 'Elementor', img: 'https://raw.githubusercontent.com/pheralb/svgl/874876fc8e737beb2405971bc917d1f2cb50a765/static/library/elementor.svg'},
            { alt: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'}],
        type: 'Frontend'
    }
]
