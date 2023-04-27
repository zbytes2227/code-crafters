import React from 'react';
import './index.css'
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Assignments from './Pages/Assignments';
import Notices from './AdminPages/Notices';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminLogin from './AdminPages/Login';
import AdminDashboard from './AdminPages/Dashboard'
import AdminQuery from './AdminPages/Query';
import Queryshow from './AdminPages/Queryshow';
import Members from './AdminPages/Members';
import VerifiedMembers from './AdminPages/VerifiedMembers';
import AdminAssignments from './AdminPages/Assignments';
import AssignmentShow from './Pages/AssignmentShow';


function App() {
  return (
    <>
    {/* <h6 className='text-center bg-gray-200'>BASE TRIAL VERSION 1.11 - UnderDev - ZBYTES 😁</h6> */}
    <h6 className="text-center bg-gray-200 sticky top-0">BASE TRIAL VERSION 1.11 - UnderDev - ZBYTES 😁</h6>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/assignments" element={<Assignments />} />
          <Route path="/dashboard/assignments/:id" element={<AssignmentShow />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/dashboard/query" element={<AdminQuery />} />
          <Route path="/admin/dashboard/query/:id" element={<Queryshow />} />
          <Route path="/admin/dashboard/notices" element={<Notices />} />
          <Route path="/admin/dashboard/members-new" element={<Members />} />
          <Route path="/admin/dashboard/members-verified" element={<VerifiedMembers />} />
          <Route path="/admin/dashboard/assignments" element={<AdminAssignments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
