import React from 'react';
import './../../layout/Layout.css';
import {Link} from "react-router-dom";




const BookingsSidebar =()=>{


  return(
    
    <div className="sidebarContainer">
    <div id="sidebar" className="nav-collapse">
    <ul className="sidebar-menu" id="nav-accordion">
    <li className="mt">
    <Link className="" to="/">
      <i className="fa fa-home"></i>
      <span>Home</span>
      </Link>
     </li>

     <li className="mt">
    <Link className="active"  to="/bookings">
      <i className="fa fa-book"></i>
      <span>Bookings</span>
      </Link>
     </li>

     <li className="mt">
     <Link  to="/">
       <i className="fa fa-male"></i>
       <span>Providers</span>
       </Link>
      </li>

      <li className="mt">
      <Link  to="/customers">
        <i className="fa fa-users"></i>
        <span>Customers</span>
        </Link>
       </li>

       <li className="mt">
      <Link  to="/">
        <i className="fa fa-newspaper-o"></i>
        <span>Notifications</span>
        </Link>
       </li>

       <li className="mt">
       <Link  to="/services">
         <i className="fa fa-user-secret"></i>
         <span>Services</span>
         </Link>
        </li>

        <li className="mt">
         <Link  to="/serviceSub">
           <i className="fa fa-street-view"></i>
           <span> Service SubCategories </span>
           </Link>
          </li>

          <li className="mt">
          <Link  to="/commercial">
            <i className="fa fa-university"></i>
            <span> Commercial Areas </span>
            </Link>
           </li>

           <li className="mt">
           <Link  to="/commercialSub">
             <i className="fa fa-home"></i>
             <span> Commercial Areas Sub </span>
             </Link>
            </li>

        <li className="mt">
       <Link  to="/">
         <i className="glyphicon glyphicon-folder-open"></i>
         <span>Reports</span>
         </Link>
        </li>

        <li className="mt">
        <Link  to="/">
          <i className="fa fa-wrench"></i>
          <span> Settings </span>
          </Link>
         </li>

    </ul>
        
   
      </div>

      </div>

        

        
  

  )
}

export default  BookingsSidebar;