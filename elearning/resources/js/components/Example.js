import React from 'react';
import ReactDOM from 'react-dom';
import UserDashboard from './UserDashboard';
import MemberDashboard from './MemberDashboard';
import AddChapters from './AddChapters';
import AddTopics from './AddTopics';
import AddExams from './AddExams';
import AdminDashboard from './AdminDashboard';
import AdminNotifications from './AdminNotifications';
import Notfound from './Notfound';
import Welcome from './Welcome';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function Example() {
    
    return (
        <Router>
        
        <>
        <Routes>
        <Route path="/" exact element={<Welcome/>}></Route>
        <Route path="/home" exact element={<UserDashboard />} ></Route>

        <Route path="/member/dashboard" exact element={<MemberDashboard />} ></Route>
        <Route path="/member/dashboard/AddChapters" exact element={<AddChapters />} ></Route>
        <Route path="/member/dashboard/AddTopics" exact element={<AddTopics />} ></Route>
        <Route path="/member/dashboard/AddExams" exact element={<AddExams />} ></Route>

        <Route path="/admin/dashboard" exact element={<AdminDashboard />} ></Route>
        <Route path="/admin/dashboard/AdminNotifications" exact element={<AdminNotifications />} ></Route>
        <Route element={<Notfound />}></Route>
        </Routes>
        </>
        
        
        </Router>
        
    );
    
};

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
