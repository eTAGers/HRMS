import React from "react";
import MainLayout from "./components/Layout/Layout";
import Dashboard from "./components/Views/Dashboard/Dashboard";
import { useRoutes } from "react-router-dom";
import Chat from "./components/Views/Chat/Chat";
import Users from "./components/Views/Users/Users";
import Createusers from "./components/Views/Users/Createusers";
import Employee from "./components/Views/Users/Employee";
import Calendar from "./components/Views/Calendar/Calendar";
import Reimbursement from "./components/Views/Reimbursements/Reimbursements";
import Loans from "./components/Views/Loans/Loans";
import Allpayslips from "./components/Views/Allpayslips/Allpayslips";
import Generatepayslips from "./components/Views/Generatepayslips/Generatepayslips";
import Payscales from "./components/Views/Payscale/Payscale";
import Createpayscales from "./components/Views/Payscale/Createpayscales";
import Dailyattedance from "./components/Views/Attedance/Dailyattendance";
import Attedancereport from "./components/Views/Attedance/Attendancereport";
import Leaves from "./components/Views/Leavesandresignation/Leaves";
import Addleave from "./components/Views/Leavesandresignation/Addleave";
import Resignation from "./components/Views/Leavesandresignation/Resignation";
import Assignwork from "./components/Views/Employeedailytask/Assignwork";
import Createdailyexpance from "./components/Views/Employeedailytask/Createdailyexpance";
import Dailyexpance from "./components/Views/Employeedailytask/Dailyexpance";
import Employeereports from "./components/Views/Employeedailytask/Employeereports";
import Notification from "./components/Views/Employeedailytask/Notification";
import Quote from "./components/Views/Employeedailytask/Quote";
import Performance from "./components/Views/Performance/Performance";
import Performancereports from "./components/Views/Performance/Performancereports";
import Certificates from "./components/Views/Performance/Certificates";
import Createcertificates from "./components/Views/Performance/Createcertificates";
import Assessments from "./components/Views/Recruitment/Assessments";
import Jobs from "./components/Views/Recruitment/Jobs";
import Candidates from "./components/Views/Recruitment/Candidates";
import Questions from "./components/Views/Recruitment/Questions";
import Createjobs from "./components/Views/Recruitment/Createjobs";
import Createcandidates from "./components/Views/Recruitment/Createcandidates";
import Createquestions from "./components/Views/Recruitment/Createquestions";
import Madeofferletter from "./components/Views/Offerandotherletter/Madeofferletter";
import Createofferletter from "./components/Views/Offerandotherletter/Createofferletter";
import Otherletter from "./components/Views/Offerandotherletter/Otherletter";
import Createotherletter from "./components/Views/Offerandotherletter/Createotherletter";
import Customers from "./components/Views/Customerandinvoice/Customers";
import Invoices from "./components/Views/Customerandinvoice/Invoices";
import Items from "./components/Views/Customerandinvoice/Items";
import Projectmaterial from "./components/Views/Customerandinvoice/Projectmaterial";
import Projectavailable from "./components/Views/Projectandmaterials/Projectavailable";
import Allotmentproject from "./components/Views/Projectandmaterials/Allotmentproject";
import Projectrequest from "./components/Views/Projectandmaterials/Projectrequest";
import Materialrequest from "./components/Views/Projectandmaterials/Materialrequest";
import Purchaseorders from "./components/Views/Purchaseitems/Purchaseorders";
import Login from "./components/Views/LoginandRegister/Login";
export default function Routerdata() {
  let element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "Dashboard", element: <Dashboard /> },
        { path: "Chat", element: <Chat /> },
        {
          path: "Users", element: <Users />
        },
        { path: "Users/Createusers", element: <Createusers />  },
        { path: "Employee", element: <Employee /> },
        { path: "Calendar", element: <Calendar /> },
        { path: "Reimbursements", element: <Reimbursement /> },
        { path: "Loans", element: <Loans /> },
        { path: "Allpayslips", element: <Allpayslips /> },
        { path: "Generatepayslips", element: <Generatepayslips /> },
        { path: "Payscales", element: <Payscales /> },
        { path: "Payscales/Createpayscales", element: <Createpayscales /> },
        { path: "Dailyattedance", element: <Dailyattedance /> },
        { path: "Attedancereport", element: <Attedancereport /> },
        { path: "Leaves", element: <Leaves /> },
        { path: "Resignation", element: <Resignation /> },
        { path: "Leaves/Addleaves", element: <Addleave /> },
        { path: "Assignwork", element: <Assignwork /> },
        { path: "Dailyexpance", element: <Dailyexpance /> },
        { path: "Employeereports", element: <Employeereports /> },
        { path: "Notification", element: <Notification /> },
        { path: "Quote", element: <Quote /> },
        { path: "Dailyexpance/Createdailyexpance", element: <Createdailyexpance /> },
        { path: "Performance", element: <Performance /> },
        { path: "Performancereports", element: <Performancereports /> },
        { path: "Certificates", element: <Certificates /> },
        { path: "Certificates/Createcertificates", element: <Createcertificates /> },
        { path: "Assessments", element: <Assessments /> },
        { path: "Candidates", element: <Candidates /> },
        { path: "Jobs", element: <Jobs /> },
        { path: "Questions", element: <Questions /> },
        { path: "Jobs/Createjobs", element: <Createjobs /> },
        { path: "Candidates/Createcandidates", element: <Createcandidates /> },
        { path: "Questions/Createquestions", element: <Createquestions /> },
        { path: "Madeofferletter", element: <Madeofferletter /> },
        { path: "Otherletter", element: <Otherletter /> },
        { path: "Madeofferletter/Createofferletter", element: <Createofferletter /> },
        { path: "Otherletter/Createotherletter", element: <Createotherletter /> },
        { path: "Customers", element: <Customers /> },
        { path: "Invoices", element: <Invoices /> },
        { path: "Items", element: <Items /> },
        { path: "Projectmaterial", element: <Projectmaterial /> },
        { path: "Projectavailable", element: <Projectavailable /> },
        { path: "Allotmentproject", element: <Allotmentproject /> },
        { path: "Projectrequest", element: <Projectrequest /> },
        { path: "Materialrequest", element: <Materialrequest /> },
        { path: "Purchaseorders", element: <Purchaseorders /> },
      ],
    },
    {
      path: "/Login",
      element: <Login />,
    }

  ]);

  return element;
}