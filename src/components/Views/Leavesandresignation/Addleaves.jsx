import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useSticky from "../Users/Strickyheader";
import classNames from "classnames";
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
export default function Addleaves() {
  const [gender, setGender] = React.useState("");
  const { sticky, stickyRef } = useSticky();
  const handlegenderChange = (event) => {
    setGender(event.target.value);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [tabValue, settabValue] = React.useState(1);

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
              <div className="col-md-3">
                <div className="form-group">
                  <label>Start Date</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                <label>End Date</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              
              <div className="col-md-3">
              <div className="form-group">
                  <label>Leave Type</label>
                  <select className="form-control">
                    <option>-- Select --</option>
                    <option>EL</option>
                    <option>CL</option>
                    <option>ML</option>
                    <option>COL</option>
                  </select>
                </div>
              </div>
              
              <div className="col-md-3">
                <div className="form-group">
                <label>No of Days</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Reason</label>
                  <textarea  className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center align-items-center">
                <button class="btn btn-outline-info px-4 my-2">
                  Add Leave
                </button>
              </div>
            </div>
          </div>
          <div className="employeeInfo ">
            <div className="row">
              <div className="col-md-12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Relationship Type</th>
                      <th scope="col">Dependancy</th>
                      <th scope="col">Date of Birth</th>
                      <th scope="col">Blood Group</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
