import React, { useEffect, useState } from "react";
import Dashboardbox from "../components/Dashboardbox";
import Adminauth from "../components/AdminAuth";
import Navbar from "./AdminComponents/Navbar";

function Query() {
    const [allQuery, setallQuery] = useState([])
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
        const api_data = await fetch("/api/admin/query", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await api_data.json();
        console.log(data);
        setallQuery(data)
    }

    useEffect(() => {
        authAdmin();
        getQuery();
    }, []);


    return (
        <>
            {ValidUser && 
            <>
            <div class="relative z-10 flex flex-col items-center w-full mb-8">
                <h1 class="mt-6 font-extrabold leading-tight text-center text-4xl sm:text-6xl">
                    <span className="text-indigo-600">Query</span>   Dashboard
                </h1>
            <Navbar/>
                <div className="container mt-12">

                    <div className="container sm:px-28">
                        {allQuery.map((query, index) => (
                            <Dashboardbox key={index} title1={query.name} title2={query.message.substr(0, 25)} link={ `/admin/dashboard/query/${query._id}`} />
                            ))} 
                    </div>
                </div>
            </div>
            </>
            }
        </>
    )
}

export default Query