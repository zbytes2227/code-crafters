import React, { useEffect, useState } from "react";
import Dashboardbox from "../components/Dashboardbox";
import Adminauth from "../components/AdminAuth";
import Navbar from "./AdminComponents/Navbar";

function Member() {
    const [ValidUser, setValidUser] = useState(false)
    const [Users, setUsers] = useState([])
    const [Loading, setLoading] = useState(false)
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

    async function getUsers() {
        const api_data = await fetch("/api/admin/users/new", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await api_data.json();
        console.log(data);
        setUsers(data)
    }

    async function acceptUser(_id) {
        setLoading(true)
        const api_data = await fetch(`/api/admin/users/accept/${_id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await api_data.json();
        console.log(data);
        setLoading(false)
        window.location.reload();

    }

    useEffect(() => {
        authAdmin();
        getUsers();
    }, []);


    return (
        <>
            {ValidUser &&
                <>
                    <div class="relative z-10 flex flex-col items-center w-full mb-8">
                        <h1 class="mt-6 font-extrabold leading-tight text-center text-4xl sm:text-6xl">
                            <span className="text-indigo-600">New User</span> Admin Panel
                        </h1>
                        <Navbar />
                        <div className="container mt-12">

                            <div className="container sm:px-28">
                                {Users.map((user, index) => (
                                    <>
                                        <Dashboardbox title1={user.name} title2={user.phone} title3={user.email} Loading={Loading} _id={user._id} function={acceptUser} btnData={"Accept"}  btnColor={'indigo'} />
                                    </>
                                ))}
                            </div>
                        </div>


                    </div>
                </>
            }
        </>
    )
}

export default Member