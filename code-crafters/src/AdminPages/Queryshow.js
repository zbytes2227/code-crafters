import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './AdminComponents/Navbar';
import Adminauth from '../components/AdminAuth';

function Queryshow() {
    const { id } = useParams();
    const [query, setquery] = useState('')
    const [ValidUser, setValidUser] = useState(false)

    async function authAdmin() {
        let data = await Adminauth();
        console.log('data');
        console.log(data);
        if (!data.user_valid) {
            window.location.href = "/admin/login";
        } else {
            setValidUser(true)
        }
    }

    async function getQuery() {
        const api_data = await fetch(`/api/admin/query/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await api_data.json();
        setquery(data);
    }

    useEffect(() => {
        getQuery();
        authAdmin();    
    }, [])


    return (
        <>
            {ValidUser &&
                <>
                    <Navbar />
                    <div class="relative z-10 p-5 flex flex-col items-center w-full mb-8">
                        <h1 class="mt-6 font-extrabold leading-tight text-center text-4xl sm:text-6xl">
                            <span className="text-indigo-600">Contact </span>   Query
                        </h1>

                        <div className="container mt-12 border rounded-lg p-4">
                            <p class="mt-2 font-extrabold leading-tight text-2xl sm:text-3xl">
                                <span className="text-indigo-600">Name: </span>   {query.name}
                            </p>

                            <p class="mt-2 font-extrabold leading-tight text-2xl sm:text-3xl">
                                <span className="text-indigo-600">Email: </span>   {query.email}
                            </p>
                            <div className="container ">
                                <p class="mt-2 font-bold leading-tight break-words text-xl sm:text-2xl">
                                    <span className="text-rose-600">Message: </span> {query.message}
                                </p>
                            </div>
                        </div>
                    </div>
                </>}
        </>
    )
}

export default Queryshow