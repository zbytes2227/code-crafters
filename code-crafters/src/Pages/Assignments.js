import React, { useState, useEffect } from 'react'
import Dashboardbox from '../components/Dashboardbox'
import Navbar from '../components/Navbar'
import Auth from '../components/Auth'


function Assignments() {

  const [ValidUser, setValidUser] = useState(false)
  const [Loading, setLoading] = useState(false)
  async function auth() {
    let data = await Auth();
    console.log('data');
    console.log(data);
    if (!data.user_valid) {
      window.location.href = "/login";
    } else {
      setValidUser(true)
    }
  }

  const [allAssignments, setAssignments] = useState([]);

  async function getAssignment() {
    setLoading(true)
    const api_data = await fetch("/api/assignment", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await api_data.json();
    console.log(data);
    setAssignments(data)
    setLoading(false)
  }


  const [Status, setStatus] = useState([]);
  async function getUserDetails() {
    const api_data = await fetch("/api/user-details", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await api_data.json();

    const api_data1 = await fetch('/api/assignment/status', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: data._id,
      }),
    });
    const status1 = await api_data1.json();
    setStatus(status1);
  }


  useEffect(() => {
    auth();
    getUserDetails();
    getAssignment();
  }, []);

  return (
    <>

      {ValidUser &&
        <>
          <Navbar />
          <h1 class="mt-6 font-extrabold leading-tight text-center text-2xl sm:text-3xl">
            <span className="text-indigo-600">Your</span> Assignments
          </h1>
          <svg
            width="40"
            height="40"
            fill="currentColor"
            class="m-auto mt-24 animate-spin"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
            hidden={Loading ? false : true}
          >
            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65s.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
          </svg>
          <div className="container mt-12 m-auto">
            <div className="container sm:x-28 rounded-md border">
              {allAssignments.map((assignment, index) => {
                const dueDate = new Date(assignment.due).toLocaleDateString();
                return (
                  <Dashboardbox
                    key={index}
                    title1={assignment.name}
                    title2={dueDate}
                    title3={assignment.topic}
                    btnColor={'rose'}
                    btnData={'Delete'}
                    _id={assignment._id}
                    link={`/dashboard/assignments/${assignment._id}`}
                    displayBadges={true}
                    Status={Status}
                  />
                );
              })}
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Assignments