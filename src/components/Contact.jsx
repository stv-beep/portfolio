import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export function Contact() {

    const service_id = process.env.REACT_APP_SERVICE_ID
    const template_id = process.env.REACT_APP_TEMPLATE_ID
    const public_key = process.env.REACT_APP_PUBLIC_KEY

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.promise(
            emailjs.sendForm(service_id, template_id, e.target, public_key),
            {
                pending: 'Sending message...'
            }
        ).then(res => {
            if (res.status === 200 || res.text === 'OK') {
                toast.success('Message sent!', {
                    position: "bottom-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    delay: 500
                });
                setName("")
                setEmail("")
                setMessage("")
            } else {
                toast.error('Seems that an error ocurred.', {
                    position: "bottom-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    delay: 500
                });
            }
        })
    };

    return (
        <section className="pt-28 montserrat lg:mx-36" id="contact">
            <h2 className="text-center text-2xl section-title">Contact me</h2>
            <div className="md:max-w-full mx-auto">
                <div className="p-6 border border-gray-300 bg-white-rgba rounded-3xl shadow-xl">
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-6">
                            <strong className="text-gray-700">Name</strong>
                            <input onChange={(e) => setName(e.target.value)} value={name}
                            type="text"
                            name="name"
                            className="appearance-none block w-full bg-slate-100 text-black border border-gray-400 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            placeholder="Your name"
                            />
                        </label>
                        <label className="block mb-6">
                            <strong className="text-gray-700">Email address</strong><span className="text-red-700"> *</span>
                            <input onChange={(e) => setEmail(e.target.value)} value={email}
                            name="userEmail"
                            type="email"
                            className="appearance-none block w-full bg-slate-100 text-black border border-gray-400 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Your email"
                            required
                            />
                        </label>
                        <label className="block mb-6">
                            <strong className="text-gray-700">Message</strong><span className="text-red-700"> *</span>
                            <textarea onChange={(e) => setMessage(e.target.value)} value={message}
                            name="message"
                            className="appearance-none block w-full bg-slate-100 text-black border border-gray-400 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                            rows="3"
                            placeholder="Your message"
                            required
                            ></textarea>
                            <p className="text-gray-900 text-xs italic font-semibold">You can talk to me with English, Spanish or Catalan!</p>
                        </label>
                        <div className="mb-6">
                            <button
                            type="submit"
                            className="
                            contact-btn
                                pt-4
                            "
                            >Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </section>
    )
}