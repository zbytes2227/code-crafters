import React, { useState } from 'react'
import Alert from './Alert';
function Signup() {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Phone, setPhone] = useState("");
    const [msg, setmsg] = useState("");
    const [Loading, setLoading] = useState(false);
    async function registerUser(e) {
        e.preventDefault();
        setLoading(true);
        const api_data = await fetch("/api/register/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: Name,
                email: Email,
                phone: Phone,
                password: Password
            }),
        });
        const data = await api_data.json();
        console.log(data);
        setLoading(false);
        if (data.success) {
            setEmail("");
            setName("");
            setPhone("");
            setPassword("");
        }
        setmsg(data.msg);
    }
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium text-5xl text-gray-900">Join our Community now.</h1>
                        <p class="leading-relaxed mt-4">If you have a passion for development and want to connect with like-minded individuals, then look no further. Join our community today and become part of a group of developers who are dedicated to sharing knowledge, resources, and experiences.</p>
                    </div>

                    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <form onSubmit={registerUser}>
                            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Ask for Joining</h2>
                            {msg ? <Alert text={msg} /> : ""}
                            <div class="relative mb-4">
                                <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                                <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={Name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={Email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="relative mb-4">
                                <label for="phone" class="leading-7 text-sm text-gray-600">Phone</label>
                                <input type="number" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={Phone}
                                    onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div class="relative mb-4">
                                <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={Password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{Loading ? "" : "Submit"}   <svg
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
                            <p class="text-xs text-gray-500 mt-3">Submit your details and our Team we'll be in touch soon.</p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup