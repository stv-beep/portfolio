import f1quotes from '../images/f1quotesapi.png'
import timetrack from '../images/timetrack.png'
import textenhancer from '../images/textenhancer.png'
import pwdgenerator from '../images/pwdgenerator.png'
import realestate from '../images/realestatelanding.webp'
import f1quotesweb from '../images/f1quotesweb.webp'
import globalcolorplugin from '../images/globalColorSelectorPlugin.png'

const images = [f1quotes, timetrack, textenhancer, pwdgenerator, realestate, f1quotesweb, globalcolorplugin]

export const projects = [
    {
        title: 'F1 drivers quotes API',
        image: images[0],
        demo: 'https://rapidapi.com/aleixalguero0/api/f1-drivers-quotes/',
        sourceCode: 'https://github.com/stv-beep/f1-quotes-api',
        text: 'An API that provides hundreds of lines of quotes cited by multiple Formula 1 drivers and personalities.',
        languages: [{ alt: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
            { alt: 'NodeJS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
            { alt: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'}],
        type: 'Backend'
    },
    {
        title: 'Employee hours tracking app',
        image: images[1],
        sourceCode: 'https://github.com/stv-beep/nath',
        text: 'Work hours registration app. Different shifts and tasks during the day, each one with its registration. In addition, an administration area.',
        languages: [{ alt: 'Laravel', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg'},
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
        text: `An app that beautifies and enhances the user's input (using AI) as if it had been written by someone very formal and cultured.`,
        languages: [{ alt: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
            { alt: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'}],
        type: 'Frontend'
    },
    {
        title: 'Random password generator',
        image: images[3],
        demo: 'https://stv-beep-password-generator.vercel.app',
        sourceCode: 'https://github.com/stv-beep/password-generator',
        text: 'Simple, but effective random password generator. Where the user can select the length of the password.',
        languages: [{ alt: 'Vue', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'},
            { alt: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'}],
        type: 'Frontend'
    },
    {
        title: 'Global color changer for Elementor',
        image: images[6],
        demo: 'http://aleix.infinityfreeapp.com/select-color-demo/',
        sourceCode: 'https://github.com/stv-beep/Global-color-changer-for-Elementor-Plugin',
        text: 'WordPress plugin that lets the visitor select colors to change website client-side global primary and secondary colors.',
        languages: [{alt: 'PHP', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg'},
            {alt: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
            { alt: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'},
            { alt: 'WordPress', img: 'https://raw.githubusercontent.com/pheralb/svgl/8df82e2e2aeeda02d6c858ad752a6cb044d4954a/static/library/wordpress.svg'},
            { alt: 'Elementor', img: 'https://raw.githubusercontent.com/pheralb/svgl/874876fc8e737beb2405971bc917d1f2cb50a765/static/library/elementor.svg'},],
        type: 'Backend'
    },
    {
        title: 'F1 drivers Quotes Website',
        image: images[5],
        demo: 'https://f1-quotes.vercel.app',
        sourceCode: 'https://github.com/stv-beep/f1-quotes-web',
        text: 'A simple website that shows multiple F1 drivers quotes.',
        languages: [{ alt: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
            { alt: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'}],
        type: 'Frontend'
    },
    {
        title: 'Real Estate landing page',
        image: images[4],
        demo: 'http://aleix.infinityfreeapp.com/',
        text: 'Straightforward Real Estate landing page made with Elementor website builder.',
        languages: [{ alt: 'WordPress', img: 'https://raw.githubusercontent.com/pheralb/svgl/8df82e2e2aeeda02d6c858ad752a6cb044d4954a/static/library/wordpress.svg'},
            { alt: 'Elementor', img: 'https://raw.githubusercontent.com/pheralb/svgl/874876fc8e737beb2405971bc917d1f2cb50a765/static/library/elementor.svg'},
            { alt: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'}],
        type: 'Frontend'
    },
]
