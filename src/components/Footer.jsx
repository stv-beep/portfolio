import React from "react";

export function Footer() {
    return (
        <>
            <footer className="mt-24 sm:flex items-center justify-center h-24 min-h-full w-full">
                <div className="flex items-center justify-center ms:pt-3">
                    <a href="https://www.linkedin.com/in/aleix-alguero-omedes" target="_blank" rel="noreferrer"
                        className="hover:scale-125 transition-all text-skin-500 hover:text-skin-700">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                            strokeLinecap="round" strokeLinejoin="round" className="text-4xl mx-6 text-white" height="1em"
                            width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none"
                                d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="4" width="16" height="16"
                                    rx="2"></rect><line x1="8" y1="11" x2="8" y2="16"></line><line x1="8" y1="8"
                                        x2="8" y2="8.01"></line><line x1="12" y1="16" x2="12" y2="11"></line>
                            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                    </a>

                    <a href="https://github.com/stv-beep" target="_blank" rel="noreferrer"
                        className="hover:scale-125 transition-all text-skin-500 hover:text-skin-700">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                            strokeLinecap="round" strokeLinejoin="round" className="text-4xl mx-6 text-white"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 
                        -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 
                        -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 
                        0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                            </path></svg>
                    </a>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-white items-center justify-center">Made with ❤ by Aleix Algueró</p>
                </div>


            </footer>
        </>
    )
}