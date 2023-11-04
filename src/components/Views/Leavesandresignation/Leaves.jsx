import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useSticky from "../Users/Strickyheader";
import classNames from "classnames";
import { Link } from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      {...props}
    />
  );
}
export default function Leaves() {
  const [gender, setGender] = React.useState("");
  const { sticky, stickyRef } = useSticky();
  const handlegenderChange = (event) => {
    setGender(event.target.value);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [tabValue, settabValue] = React.useState(0);

  const handleHeaderTabChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      settabValue(newValue);
    }
  };

  return (
    <>
      <nav
        ref={stickyRef}
        className={classNames("navbar navbar-default", { sticky })}
        style={{ height: "60px", borderBottom: "1px solid #e9ecef" }}
      >
        <div className="container-fluid justify-content-start">
          {/* <p className="navbar-header m-0 px-4 font-weight-bold">Employees</p> */}
          <Tabs
            value={tabValue}
            onChange={handleHeaderTabChange}
            aria-label="nav tabs example"
          >
            <Tab label="Leaves" href="/Leaves" />
            <Tab label="Add Leaves" href="/Leaves/Addleaves" />
            <Tab label="Holidays" href="/Holidays" />
          </Tabs>
        </div>
      </nav>
      <div className="card">
        <div className="card-body">
          <div className="employeeInfo">
            <div className="row">
              <div class="col-12 col-md-4 col-lg-3">
                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Casual Leaves</h4>
                  </div>
                  <div class="card-body">
                    <p>
                      Available: 5
                    </p>
                    <p>
                      Taken: 2
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-3">
                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Earn Leaves</h4>
                  </div>
                  <div class="card-body">
                    <p>
                      Available: 5
                    </p>
                    <p>
                      Taken: 2
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-3">
                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Sick Leaves</h4>
                  </div>
                  <div class="card-body">
                    <p>
                      Available: 5
                    </p>
                    <p>
                      Taken: 2
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-3">
                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Compensary Off</h4>
                  </div>
                  <div class="card-body">
                    <p>
                      Available: 5
                    </p>
                    <p>
                      Taken: 2
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-3">
                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Patenity Leave</h4>
                  </div>
                  <div class="card-body">
                    <p>
                      Available: 5
                    </p>
                    <p>
                      Taken: 2
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-3">
                <div class="card card-primary">
                  <div class="card-header">
                    <h4>With pay</h4>
                  </div>
                  <div class="card-body">
                    <p>
                      Available: 5
                    </p>
                    <p>
                      Taken: 2
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-3">
                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Without pay</h4>
                  </div>
                  <div class="card-body">
                    <p>
                      Available: 5
                    </p>
                    <p>
                      Taken: 2
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center align-items-center">
                <Link class="btn btn-outline-info px-4 my-2" to={"/Leaves/Addleaves"}>
                  Apply Leave
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
