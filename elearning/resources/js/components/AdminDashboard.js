import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Menu from './AdminMenuApi';
import UserDashboard from './UserDashboard';



// import { useState } from 'react';

const AdminDashboard = () => {
    const [menuData, setMenuData]= useState(Menu);
    
  return (
   <>
    <div className="row bg-dark justify-content-center">
    <div className="col lft_nav hidden">
        <ul className="text-center text-white">
        
        {menuData.map(ele => (<div key={ele.id}><Link className="mt-3" to={ele.file} >{ele.btn}</Link></div>))}
            </ul>
    </div>
    <div className="col-sm-10 bg-secondary justify-content-center cbody pb-5">
        <div className="text-center">
         
            <UserDashboard/>
            
        </div>
    </div>
    </div>
    </> 
    );

};



export default AdminDashboard;
