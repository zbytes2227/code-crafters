import React, { useEffect, useState } from "react";
import Dashboardbox from "../components/Dashboardbox";
import Adminauth from "../components/AdminAuth";
import Navbar from "./AdminComponents/Navbar";
import Alert from "../components/Alert";

function Assignments() {
    const [ValidUser, setValidUser] = useState(false)
    const [allAssignments, setAssignments] = useState([])
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

    async function getAssignment() {
        const api_data = await fetch("/api/admin/assignment", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await api_data.json();
        console.log(data);
        setAssignments(data)
    }

    useEffect(() => {
        authAdmin();
        getAssignment();
    }, []);



    const [dueDate, setdueDate] = useState('')
    const [title, settitle] = useState("");
    const [name, setname] = useState("Assignment");
    const [msg, setmsg] = useState("");

    async function saveAssignment(e) {
        e.preventDefault();

        const api_data = await fetch("/api/admin/assignment/new/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                topic: title,
                due: dueDate
            }),
        });

        const data = await api_data.json();
        console.log(data);
        setmsg(data.msg);
        getAssignment();
        window.location.reload();
    }


    async function deleteAssignment(_id) {
        const api_data = await fetch("/api/admin/assignment", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Assignment_id: _id,
            }),
        });

        const data = await api_data.json();
        console.log(data);
        getAssignment();
        window.location.reload();
    }


    return (
        <>
            {ValidUser &&
                <>
                    <div class="relative z-10 flex flex-col items-center w-full mb-8">
                        <h1 class="mt-6 font-extrabold leading-tight text-center text-4xl sm:text-6xl">
                            <span className="text-indigo-600">Assignment</span>   Dashboard
                        </h1>
                        <Navbar />
                        <h1 class="mt-6 font-extrabold leading-tight text-center text-2xl sm:text-3xl">
                            <span className="text-indigo-600">New</span> Assignment
                        </h1>

                        <div className="border flex justify-center dark:border-0 m-2 p-4 rounded w-full sm:w-full md:w-1/2 ">
                            <div class="flex flex-col w-full max-w px-4 py-8 bg-white rounded-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                                <div class="self-center mb-1 text-2xl font-light text-gray-600 sm:text-3xl dark:text-white">
                                    Add new Assignment
                                </div>
                                {msg ? <Alert text={msg} /> : ""}
                                <div class="mt-8">
                                    <form
                                        action="#"
                                        autoComplete="off"
                                        onSubmit={(e) => saveAssignment(e)}
                                    >



                                        <div class="flex flex-col mb-2">
                                            <div class="flex relative ">
                                                <input
                                                    type="text"
                                                    id="sign-in-email"
                                                    class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    placeholder="Assignment Name"
                                                    value={name}
                                                    onChange={(e) => {
                                                        setname(e.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div class="flex flex-col mb-2">
                                            <div class="flex relative ">
                                                <input
                                                    type="text"
                                                    value={title}
                                                    onChange={(e) => {
                                                        settitle(e.target.value);
                                                    }}
                                                    id="sign-in-email"
                                                    class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    placeholder="Assignment Tittle"
                                                />
                                            </div>
                                        </div>


                                        <div class="flex flex-col mb-2">
                                            <div class="flex relative ">
                                                <input
                                                    type="date"
                                                    value={dueDate}
                                                    onChange={(e) => {
                                                        setdueDate(e.target.value);
                                                    }}
                                                    id="sign-in-email"
                                                    class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    placeholder="Assignment Tittle"
                                                />
                                            </div>
                                        </div>

                                        <div class="flex w-full">
                                            <button
                                                type="submit"
                                                class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <h1 class="mt-6 font-extrabold leading-tight text-center text-2xl sm:text-3xl">
                            <span className="text-indigo-600">All</span>   Assignments
                        </h1>
                        <div className="container mt-12">
                            <div className="container sm:x-28 rounded-md border">
                                {allAssignments.map((assignment, index) => (
                                    <Dashboardbox title1={assignment.name} title2={assignment.due} title3={assignment.topic} btnColor={'rose'} btnData={'Delete'} _id={assignment._id} function={deleteAssignment}/>
                                ))}
                            </div>
                        </div>

                    </div>
                </>
            }
        </>
    )
}

export default Assignments