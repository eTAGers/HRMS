import React, { useEffect, useState } from "react";
import './mainHeader.css'
import { Link as RouterLink } from "react-router-dom";
import { createStyles, lighten } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
// const { useLayoutEffect, useState, useRef } = React;

// function useStickyHeader(offset = 0) {
//   const [stick, setStick] = useState(false);

//   const handleScroll = () => {
//     setStick(window.scrollY > offset);
//   };

//   useLayoutEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   });

//   return stick;
// }
const useStyles = makeStyles((theme) =>
      createStyles({
        link: {
          textDecoration: 'none',
        },
        highlighted: {
          backgroundColor: lighten(green[500], 0.5),
        },
      })
    )
export default function MainHeader() {
  const s = useStyles()
      const [activeItemIndex, setActiveItemIndex] = useState(1)
  // const ref = useRef();
  // const sticky = useStickyHeader(50);
  // const headerClasses = `header ${sticky ? "sticky" : ""}`;
  // const { clientHeight } = ref;
  
    const onclickActive = (e)=>{
      alert(e.target.dataset.id);
      if(e.target.dataset.id)
      activeItemIndex === 0 ? setActiveItemIndex(1) : setActiveItemIndex(0); 
    }
 
  return (
    <>
      <div>
       
        <nav className="navbar navbar-expand-lg main-navbar">
            <form className="form-inline mr-auto">
                <ul className="navbar-nav mr-3">
                    {/* <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars"></i></a></li> */}
                    <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search"></i></a></li>
                </ul>
                <div className="search-element">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250"/>
                    <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                    <div className="search-backdrop"></div>
                    <div className="search-result">
                        <div className="search-header">Histories</div>
                        <div className="search-item">
                            <a href="#">How to Used HTML in Laravel</a>
                            <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                        </div>
                        <div className="search-item">
                            <a href="https://themeforest.net/user/admincraft/portfolio" target="_black">Admincraft Portfolio</a>
                            <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                        </div>
                        <div className="search-item">
                            <a href="#">#CodiePie</a>
                            <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                        </div>
                        <div className="search-header">Result</div>
                        <div className="search-item">
                            <a href="#">
                                <img className="mr-3 rounded" width="30" src="assets/img/products/product-3-50.png" alt="product"/>
                                oPhone 11 Pro
                            </a>
                        </div>
                        <div className="search-item">
                            <a href="#">
                                <img className="mr-3 rounded" width="30" src="assets/img/products/product-2-50.png" alt="product"/>
                                Drone Zx New Gen-3
                            </a>
                        </div>
                        <div className="search-item">
                            <a href="#">
                                <img className="mr-3 rounded" width="30" src="assets/img/products/product-1-50.png" alt="product"/>
                                Headphone JBL
                            </a>
                        </div>
                        <div className="search-header">Projects</div>
                        <div className="search-item">
                            <a href="https://themeforest.net/item/epice-laravel-admin-template-for-hr-project-management/24466729" target="_black">
                                <div className="search-icon bg-danger text-white mr-3"><i className="fas fa-code"></i></div>
                                Epice Laravel - Admin Template
                            </a>
                        </div>
                        <div className="search-item">
                            <a href="https://themeforest.net/item/soccer-project-management-admin-template-ui-kit/24646866" target="_black">
                                <div className="search-icon bg-primary text-white mr-3"><i className="fas fa-laptop"></i></div>
                                Soccer - Admin Template
                            </a>
                        </div>
                    </div>
                </div>
            </form>
            <ul className="navbar-nav navbar-right">
                <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle beep"><i className="far fa-envelope"></i></a>
                    <div className="dropdown-menu dropdown-list dropdown-menu-right">
                    <div className="dropdown-header">Messages
                        <div className="float-right">
                            <a href="#">Mark All As Read</a>
                        </div>
                    </div>
                    <div className="dropdown-list-content dropdown-list-message">
                        <a href="#" className="dropdown-item dropdown-item-unread">
                            <div className="dropdown-item-avatar">
                                <img alt="image" src="assets/img/avatar/avatar-1.png" className="rounded-circle"/>
                                <div className="is-online"></div>
                            </div>
                            <div className="dropdown-item-desc">
                                <b>Kusnaedi</b>
                                <p>Hello, Bro!</p>
                                <div className="time">10 Hours Ago</div>
                            </div>
                        </a>
                        <a href="#" className="dropdown-item dropdown-item-unread">
                            <div className="dropdown-item-avatar">
                                <img alt="image" src="assets/img/avatar/avatar-2.png" className="rounded-circle"/>
                            </div>
                            <div className="dropdown-item-desc">
                                <b>Dedik Sugiharto</b>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                <div className="time">12 Hours Ago</div>
                            </div>
                        </a>
                        <a href="#" className="dropdown-item dropdown-item-unread">
                            <div className="dropdown-item-avatar">
                                <img alt="image" src="assets/img/avatar/avatar-3.png" className="rounded-circle"/>
                                <div className="is-online"></div>
                            </div>
                            <div className="dropdown-item-desc">
                                <b>Agung Ardiansyah</b>
                                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div className="time">12 Hours Ago</div>
                            </div>
                        </a>
                        <a href="#" className="dropdown-item">
                            <div className="dropdown-item-avatar">
                                <img alt="image" src="assets/img/avatar/avatar-4.png" className="rounded-circle"/>
                            </div>
                            <div className="dropdown-item-desc">
                                <b>Ardian Rahardiansyah</b>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                                <div className="time">16 Hours Ago</div>
                            </div>
                        </a>
                        <a href="#" className="dropdown-item">
                            <div className="dropdown-item-avatar">
                                <img alt="image" src="assets/img/avatar/avatar-5.png" className="rounded-circle"/>
                            </div>
                            <div className="dropdown-item-desc">
                                <b>Alfa Zulkarnain</b>
                                <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                <div className="time">Yesterday</div>
                            </div>
                        </a>
                    </div>
                    <div className="dropdown-footer text-center">
                        <a href="#">View All <i className="fas fa-chevron-right"></i></a>
                    </div>
                    </div>
                </li>
                <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell"></i></a>
                    <div className="dropdown-menu dropdown-list dropdown-menu-right">
                    <div className="dropdown-header">Notifications
                        <div className="float-right">
                            <a href="#">Mark All As Read</a>
                        </div>
                    </div>
                    <div className="dropdown-list-content dropdown-list-icons">
                        <a href="#" className="dropdown-item dropdown-item-unread">
                            <div className="dropdown-item-icon bg-primary text-white">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="dropdown-item-desc"> Template update is available now!
                                <div className="time text-primary">2 Min Ago</div>
                            </div>
                        </a>
                        <a href="#" className="dropdown-item">
                            <div className="dropdown-item-icon bg-info text-white">
                                <i className="far fa-user"></i>
                            </div>
                            <div className="dropdown-item-desc">
                                <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                                <div className="time">10 Hours Ago</div>
                            </div>
                        </a>
                        <a href="#" className="dropdown-item">
                            <div className="dropdown-item-icon bg-success text-white">
                                <i className="fas fa-check"></i>
                            </div>
                            <div className="dropdown-item-desc">
                                <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>
                                <div className="time">12 Hours Ago</div>
                            </div>
                        </a>
                        <a href="#" className="dropdown-item">
                            <div className="dropdown-item-icon bg-danger text-white">
                                <i className="fas fa-exclamation-triangle"></i>
                            </div>
                            <div className="dropdown-item-desc">
                                Low disk space. Let's clean it!
                                <div className="time">17 Hours Ago</div>
                            </div>
                        </a>
                        <a href="#" className="dropdown-item">
                            <div className="dropdown-item-icon bg-info text-white">
                                <i className="fas fa-bell"></i>
                            </div>
                            <div className="dropdown-item-desc">
                                Welcome to CodiePie template!
                                <div className="time">Yesterday</div>
                            </div>
                        </a>
                    </div>
                    <div className="dropdown-footer text-center">
                        <a href="#">View All <i className="fas fa-chevron-right"></i></a>
                    </div>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                    <img alt="image" src="assets/img/avatar/avatar-1.png" className="rounded-circle mr-1"/>
                    <div className="d-sm-none d-lg-inline-block">Hi, Michelle Green</div></a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="dropdown-title">Logged in 5 min ago</div>
                        <a href="features-profile.html" className="dropdown-item has-icon"><i className="far fa-user"></i> Profile</a>
                        <a href="features-activities.html" className="dropdown-item has-icon"><i className="fas fa-bolt"></i> Activities</a>
                        <a href="features-settings.html" className="dropdown-item has-icon"><i className="fas fa-cog"></i> Settings</a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item has-icon text-danger"><i className="fas fa-sign-out-alt"></i> Logout</a>
                    </div>
                </li>
            </ul>
        </nav>

        <div className="main-sidebar sidebar-style-1">
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <a href="https://etagers.in" style={{textTransform:"none"}}>eTAGers HRMS</a>
                </div>
                <ul className="sidebar-menu">
                    <li className="dropdown">
                    <RouterLink className="nav-link" to={"/Dashboard"}>
                        <i className="fas fa-fire"></i><span>Dashboard</span></RouterLink>
                       
                    </li>
                    <li className="dropdown">
                    <RouterLink className="nav-link" to={"/Dashboard"}>
                        <i className="fas fa-fire"></i><span>Approval</span></RouterLink>
                       
                    </li>
                    <li className="dropdown">
                    <RouterLink className="nav-link" to={"/Chat"}>
                        <i className="fas fa-fire"></i><span>Chat</span></RouterLink>
                       
                    </li>
                    <li className="dropdown">
                    <RouterLink className="nav-link" to={"/Calendar"}>
                        <i className="fas fa-fire"></i><span>Calendar</span></RouterLink>
                       
                    </li>
                    <li className="dropdown">
                    <RouterLink className="nav-link" to={"/Users/Createusers"}><i className="fas fa-columns"></i> <span>Employee & Users</span></RouterLink>
                        {/* <ul className="dropdown-menu">
                            <li><RouterLink className="nav-link" to={"/Users"}>Users</RouterLink></li>
                            
                            <li><RouterLink className="nav-link" to={"/Employee"}>Employees</RouterLink></li>
                        </ul> */}
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link"><i className="fas fa-th"></i> <span>Loan & Reimburs</span></a>
                        {/* <ul className="dropdown-menu">
                            <li><RouterLink className="nav-link" to={"/Loans"}>Loans</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Reimbursements"}>Reimbursements</RouterLink></li>
                        </ul> */}
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link"><i className="fas fa-th-large"></i> <span>Payrolls</span></a>
                        {/* <ul className="dropdown-menu">
                            <li><RouterLink className="nav-link" to={"/Allpayslips"}>All Payslips</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Generatepayslips"}>Generate PaySlips</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Payscales"}>Pay Scale Setup</RouterLink></li>
                        </ul> */}
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link"><i className="far fa-file-alt"></i> <span>Attedance</span></a>
                        {/* <ul className="dropdown-menu">
                            <li><RouterLink className="nav-link" to={"/Dailyattedance"}>Daily Attendance</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Attedancereport"}>Attendance Reports</RouterLink></li>
                        </ul> */}
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link"><i className="fas fa-map-marker-alt"></i> <span>Leaves & Resignation</span></a>
                        {/* <ul className="dropdown-menu">
                            <li><RouterLink className="nav-link" to={"/Resignation"}>Resignation</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Leaves"}>Leaves</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Leaves/Addleaves"}>Add Leave</RouterLink></li>
                        </ul> */}
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link"><i className="far fa-user"></i> <span>Employee Daily Tasks</span></a>
                        {/* <ul className="dropdown-menu">
                            <li><RouterLink className="nav-link" to={"/Assignwork"}>Assign Work</RouterLink></li> 
                            <li><RouterLink className="nav-link" to={"/Employeereports"}>Employee Reports</RouterLink></li> 
                            <li><RouterLink className="nav-link" to={"/Notification"}>Notification</RouterLink></li> 
                            <li><RouterLink className="nav-link" to={"/Quote"}>Quote</RouterLink></li> 
                            <li><RouterLink className="nav-link" to={"/Dailyexpance"}>Daily Expense</RouterLink></li> 
                        </ul> */}
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link"><i className="fas fa-exclamation"></i> <span>Performances</span></a>
                        {/* <ul className="dropdown-menu">
                            <li><RouterLink className="nav-link" to={"/Performance"}>Performances</RouterLink></li> 
                            <li><RouterLink className="nav-link" to={"/Performancereports"}>Performance Reports</RouterLink></li> 
                            <li><RouterLink className="nav-link" to={"/Certificates"}>Generate Certificates</RouterLink></li>
                        </ul> */}
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link"><i className="fas fa-bicycle"></i> <span>Recruitment</span></a>
                        {/* <ul className="dropdown-menu">
                            <li><RouterLink className="nav-link" to={"/Jobs"}>Jobs</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Candidates"}>Candidates</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Assessments"}>Assessments</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Questions"}>Questions</RouterLink></li>
                        </ul> */}
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link"><i className="fas fa-bicycle"></i> <span>Offer & Other Letter</span></a>
                        {/* <ul className="dropdown-menu">
                            <li><RouterLink className="nav-link" to={"/Madeofferletter"}>Made Offer Letter</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Candidates"}>Create Offer Letter</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Otherletter"}>Create Other Letters</RouterLink></li>
                        </ul> */}
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link"><i className="fas fa-bicycle"></i> <span>Customers & Invoice</span></a>
                        {/* <ul className="dropdown-menu">
                            <li><RouterLink className="nav-link" to={"/Customers"}>Authorize Customer</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Invoices"}>Create Invoice</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Items"}>Input Invoice Items</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Projectmaterial"}>Input Project Material</RouterLink></li>
                        </ul> */}
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link"><i className="fas fa-bicycle"></i> <span>Project & Materials</span></a>
                        {/* <ul className="dropdown-menu">
                            <li><RouterLink className="nav-link" to={"/Projectavailable"}>Project Available</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Allotmentproject"}>Allotment Project</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Projectrequest"}>Project Request</RouterLink></li>
                            <li><RouterLink className="nav-link" to={"/Materialrequest"}>Material Request</RouterLink></li>
                        </ul> */}
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link"><i className="fas fa-bicycle"></i> <span>Purchase Items</span></a>
                        {/* <ul className="dropdown-menu">
                            <li><RouterLink className="nav-link" to={"/Purchaseorders"}>Input Purchase Order</RouterLink></li>
                        </ul> */}
                    </li>
                    
                </ul>
            </aside>
        </div>

      </div>
    </>
  );
}
