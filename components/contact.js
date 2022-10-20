import { set } from "date-fns";
import { useEffect, useState, useRef } from "react"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios').default;
export default function Contact() {

    const [message,setMessage] = useState('')
    const [email,setEmail] = useState('')
    const [name, setName] = useState('')

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleMessage = (event) => {
        setMessage(event.target.value)
    }
    const handleSubmitButton = async () => {
        // await axios.post('/api/emailNode', data)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        const data = {email,name,message}
        await fetch('/api/emailNode', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            },
        }).then((response) => {
            if (response.status >= 400) {
                toast.error("Email failed to send")
            } else {
                toast.success("Email sent!")
                setEmail(''); setMessage(''); setName('');
            }
        })
        // toast.success("Email sent!")
    }
    return (
        <>  
            <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
            <div id="contact" className="grid grid-rows-1 lg:py-24 py-20 gap-3 lg:grid-rows-3 lg:grid-flow-col text-sm lg:text-lg text-dark">
                <div className="flex flex-col lg:row-span-3 lg:order-1 justify-center items-center lg:bg-gradient-to-r lg:from-violet-100 lg:to-cyan-50 rounded-2xl">
                    <h1 className="text-2xl font-semibold lg:text-3xl">CONTACT</h1>
                    <p className="">Get in touch with us</p>
                </div>
                <div className="flex flex-col gap-2 lg:order-2 lg:px-3">
                    <label className="font-medium">Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={handleName} className="outline-0 p-2 border-2 rounded-lg border-primary lg:border-[3px]"/>
                </div>
                <div className="flex flex-col gap-2 lg:order-3 lg:px-3   lg:relative">
                    <label className="font-medium">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleEmail} className="outline-0 p-2 border-2 rounded-lg border-primary peer lg:border-[3px]"/>
                    <p className="hidden peer-invalid:block text-red-700 font-semibold lg:absolute lg:left-16 lg:bg-red-200 lg:px-3 lg:rounded-md">
                        Please enter a valid email address
                    </p>
                </div>
                <div className="flex flex-col gap-2 lg:order-5 lg:row-span-3">
                    <label className="font-medium">Message</label>
                    <textarea name="message" id="message"  value={message} onChange={handleMessage} className="outline-0 pr-4 py-3 pl-3 border-2 rounded-lg border-primary h-44 align-top mt-0 scrollbar-thumb-primary resize-none scrollbar-thin lg:h-full lg:border-[3px]"/>
                </div>
                <div className="flex justify-end lg:order-4 items-center lg:px-3">
                    <button onClick={handleSubmitButton} className="font-semibold bg-primary py-2 align-middle text-center text-white px-9 rounded-lg lg:h-1/2 hover:bg-white hover:outline hover:outline-[3px] hover:outline-offset-[-3px] hover:outline-primary hover:text-primary duration-150 ease-in-out">Submit</button>
                </div>
            </div>
        </>
    )
}