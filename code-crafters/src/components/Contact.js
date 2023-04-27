import React, { useState } from 'react'
import Alert from './Alert';

function Contact() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");
    const [msg, setmsg] = useState("");
    const [Loading, setLoading] = useState(false);
    async function submitData(e) {
        e.preventDefault();
        setLoading(true);
        const api_data = await fetch("/api/new/query", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: Name,
                email: Email,
                message: Message
            }),
        });
        const data = await api_data.json();
        console.log(data);
        setLoading(false);
        if (data.success) {
            setEmail("");
            setMessage("");
            setName("");
        }
        setmsg(data.msg);
    }
    return (
        <>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">If you need to get in touch with us, we're always here to help! Our team is dedicated to providing the best possible experience for our community members, so don't hesitate to reach out to us with any concerns or feedback you may have.</p>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        {msg ? <Alert text={msg} /> : ""}
                        <form onSubmit={submitData}>
                            <div class="flex flex-wrap -m-2">

                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={Name}
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="emailss" class="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="emailss" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={Email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                        <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={Message}
                                            onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">{Loading ? "" : "Submit"}   <svg
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        class="ml-2 animate-spin"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                        hidden={Loading ? false : true}
                                    >
                                        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65s.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                                    </svg></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact