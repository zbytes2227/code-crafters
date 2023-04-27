import React, { useState, useEffect } from "react";
import Alert from "../components/Alert";
import NoticeCard from "./AdminComponents/NoticeCard";
import Navbar from "./AdminComponents/Navbar";
import Adminauth from "../components/AdminAuth";

function Notices() {

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


    const [link, setLink] = useState(false);
    const [title, settitle] = useState("");
    const [Src, setSrc] = useState("");
    const [msg, setmsg] = useState("");

    const handleCheckboxChange = (event) => {
        setLink(event.target.checked);
        console.log(title);
        console.log(Src);
    };

    async function saveNotice(e) {
        e.preventDefault();

        const api_data = await fetch("/api/admin/notice", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Notice_title: title,
                Notice_link: link,
                Notice_src: Src,
            }),
        });

        const data = await api_data.json();
        console.log(data);
        setmsg(data.msg);
        getNotices();
    }

    const [notices, setNotices] = useState([]);
    const [Loading, setLoading] = useState(false);

    async function getNotices() {
        setLoading(true);
        const api_data = await fetch("/api/admin/notice", {
            method: "GET",
        });

        const data = await api_data.json();
        setLoading(false);
        setNotices(data);
    }

    async function deleteNotice(_id) {
        const api_data = await fetch("/api/admin/notice", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                notice_id: _id,
            }),
        });

        const data = await api_data.json();
        console.log(data);
        getNotices();
    }

    useEffect(() => {
        authAdmin();
        getNotices();
    }, []);

    return (
        <>   {ValidUser && 
            <>
            <Navbar />
            <div className="container my-3 flex m-auto flex-col sm:flex-row flex-wrap justify-center">
                <div className="border flex justify-center dark:border-0 m-2 p-4 rounded w-full sm:w-full md:w-1/2 ">
                    <div class="flex flex-col w-full max-w px-4 py-8 bg-white rounded-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                        <div class="self-center mb-1 text-2xl font-light text-gray-600 sm:text-3xl dark:text-white">
                            Add new Notice
                        </div>
                        {msg ? <Alert text={msg} /> : ""}
                        <div class="mt-8">
                            <form
                                action="#"
                                autoComplete="off"
                                onSubmit={(e) => saveNotice(e)}
                            >
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
                                            placeholder="Notice Tittle"
                                        />
                                    </div>
                                </div>
                                <div className="my-4">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                        checked={link}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label
                                        className="form-check-label mx-2 dark:text-white"
                                        htmlFor="exampleCheck1"
                                    >
                                        Add a link
                                    </label>
                                </div>

                                {link && (
                                    <div class="flex flex-col mb-6">
                                        <div class="flex relative ">
                                            <input
                                                type="text"
                                                id="sign-in-email"
                                                class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                placeholder="Link"
                                                value={Src}
                                                onChange={(e) => {
                                                    setSrc(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}

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
                <div className="border m-2 p-4 rounded w-full dark:border-0 sm:w-full md:w-1/2">
                    <h4 className="text-center dark:text-white text-2xl">
                        Published Notices
                    </h4>
                    <div className="d-flex justify-content-center">
                        <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="ml-2 animate-spin"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                            hidden={Loading ? false : true}
                        >
                            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                        </svg>
                    </div>
                    {notices.map((notice, index) => (
                        <NoticeCard
                            notice={notice}
                            deleteNotice={deleteNotice}
                            key={index}
                        />
                        // <div
                        //   className="alert alert-success alert-dismissible fade show"
                        //   role="alert"
                        //   key={index}
                        // >
                        //   {notice.title}
                        //   <button
                        //     type="button"
                        //     className="btn-close"
                        //     data-bs-dismiss="alert"
                        //     aria-label="Close"
                        //     onClick={(e) => deleteNotice(notice._id)}
                        //   ></button>
                        // </div>
                    ))}
                </div>
            </div>
            </>}
        </>
    );
}

export default Notices;
