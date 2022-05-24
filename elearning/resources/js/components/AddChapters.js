import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import Menu from './MenuApi';
import ChapterContent from './ChapterContent';

const AddChapters = () => {
  const [menuData, setMenuData]= useState(Menu);
 
return (
    <>
    <div className="row bg-dark justify-content-center">
    <div className="col lft_nav hidden">
        <ul className="text-center text-white">
        
        {menuData.map(ele => (<div key={ele.id}><NavLink className="mt-3" strict exact to={ele.file} >{ele.btn}</NavLink></div>))}
            </ul>
    </div>
    <div className="col-sm-10 bg-secondary justify-content-center cbody pb-5">
        <div className="text-center">
         
            <ChapterContent/>
            
        </div>
    </div>
    </div>
    </>
  )
}

export default AddChapters
