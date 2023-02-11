import hourTrackingRegister from '../images/hour-tracking-app/hour-tracking-register.png'
import hourTrackingHome from '../images/hour-tracking-app/hour-tracking-home.png'
import hourTrackingShift from '../images/hour-tracking-app/hour-tracking-workshift.png'
import hourTrackingTasks from '../images/hour-tracking-app/hour-tracking-tasks.png'
import hourTrackingUsers from '../images/hour-tracking-app/hour-tracking-users.png'

const screenshotsArr = [
    {
        img: hourTrackingRegister,
        alt: "Employee hours tracking app registration form."
    },
    {
        img: hourTrackingHome,
        alt: "Employee hours tracking app home page."
    },
    {
        img: hourTrackingShift,
        alt: "Employee hours tracking app work timer page."
    },
    {
        img: hourTrackingTasks,
        alt: "Employee hours tracking app tasks page."
    },
    {
        img: hourTrackingUsers,
        alt: "Employee hours tracking app users administration page."
    }
]

export default function Carousel() {
    return (
        <>
            <div id="animation-carousel" className="relative" data-carousel="static">
                <div className="relative overflow-hidden rounded-lg h-[84vh] 2xl:h-[70vh] xs:h-[40vh]">

                    {screenshotsArr.map((screenshot) => {
                        return (
                            <div className="hidden duration-300 ease-linear" data-carousel-item key={screenshot.alt}>
                                <img src={screenshot.img} className="absolute rounded-md block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={screenshot.alt} aria-label={screenshot.alt} />
                            </div>
                        )
                    })}
                </div>

                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 bg-slate-200 py-3 px-2 rounded-lg">
                    {screenshotsArr.map((screenshot, i) => {
                        i++
                        return (
                            <button type="button" className="w-3 h-3 rounded-full bg-gray-700 hover:bg-gray-500" aria-current="true" aria-label={screenshot.alt} data-carousel-slide-to={i - 1} key={i}></button>
                        )

                    })}
                </div>
                
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-600/30 dark:bg-gray-800/30 group-hover:bg-gray-400/30 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-600/30 dark:bg-gray-800/30 group-hover:bg-gray-400/30 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </>

    )
}