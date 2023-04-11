import { experiences } from './ExperienceData'

export function Experience() {
    return (
        <section className="projects pt-20 2xl:mx-36 lg:mx-36 md:mx-0 mb-10" id="experience">
            <h2 className="text-center text-4xl section-title">Experience</h2>

            <div className="grid grid-flow-col bg-slate-100 rounded-2xl shadow-xl p-10">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    {experiences.map((experience, index) => {
                        return (
                            <li className="mb-10 ml-6" key={index}>
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-200 rounded-full -left-3 ring-8 ring-yellow-100 dark:ring-gray-900 dark:bg-blue-900">
                                    <svg aria-hidden="true" className="w-3 h-3 text-yellow-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                </span>

                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{experience.company}
                                {experience.currently === true ? (<span className="bg-yellow-500 text-yellow-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Current</span>) : (<></>)}</h3>
                                
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    {experience.chronology}</time>
                                <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">{experience.info}</p>
                            </li>
                        )
                    })
                    }
                </ol>
            </div>

        </section>
    )
}
