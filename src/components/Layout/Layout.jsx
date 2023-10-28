import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { makeStyles } from "@mui/styles";
import Footer from "./Footer";
import MainHeader from "./mainHeader";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    position: "relative",
    left: "290px",
    width: "calc(100% - 315px)",
    margin:"75px 0"
,  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    width: "calc(100% - 315px)",
  },
}));

const MainLayout = () => {
  const classes = useStyles();
  return (
    <div id="app">
      <div className="main-wrapper main-wrapper-1">
        <div className="navbar-bg"></div>
        <MainHeader />
        <div className={classes.root} style={{ backgroundColor: "#fff" }}>
          {/* <Header /> */}
          <div className={classes.wrapper}>
            <div className={classes.contentContainer}>
              <div className={classes.content}>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
