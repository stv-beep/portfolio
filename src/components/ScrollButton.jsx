import { useEffect, useState } from "react"
import { BiArrowFromBottom } from 'react-icons/bi'

const ScrollButton = () =>  {
    
    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])
    

    return (
        <div className="fixed bottom-2 right-2">
            <button
                type="button"
                onClick={scrollToTop}
                style={{display: visible ? 'inline' : 'none'}}
                className='bg-green-300 hover:bg-green-500 focus:ring-lime-900 inline-flex items-center  rounded-xl
                p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2'
            >
                <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    )
}

export default ScrollButton