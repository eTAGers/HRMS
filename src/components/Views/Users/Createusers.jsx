import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useSticky from "./Strickyheader";
import classNames from "classnames";
import "./Createusers.css";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
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
export default function Createusers() {
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
            <Tab label="Add Employee" href="/Dailyattedance" />
            <Tab label="Edit Employee" href="/Dailyattedance" />
            <Tab label="View Employee" href="/Employeereports" />
            <Tab label="Portfolio" href="/Dailyexpance" />
          </Tabs>
        </div>
      </nav>
      <div className="card">
        <div className="card-body">
          <ul className="nav nav-pills" id="myTab3" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link  active show"
                id="professional-tab1"
                data-toggle="tab"
                href="#professional"
                role="tab"
                aria-controls="Professional"
                aria-selected="true"
              >
                Professional
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="communication-tab2"
                data-toggle="tab"
                href="#communication"
                role="tab"
                aria-controls="Communication"
                aria-selected="false"
              >
                Communication
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="personal-tab3"
                data-toggle="tab"
                href="#personal"
                role="tab"
                aria-controls="Personal"
                aria-selected="false"
              >
                Personal
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="education-tab4"
                data-toggle="tab"
                href="#education"
                role="tab"
                aria-controls="Education"
                aria-selected="false"
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="nomination-tab5"
                data-toggle="tab"
                href="#nomination"
                role="tab"
                aria-controls="Nomination"
                aria-selected="false"
              >
                Nomination
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent2">
            <div
              className="tab-pane fade active show"
              id="professional"
              role="tabpanel"
              aria-labelledby="professional-tab1"
            >
              <div className="card">
                <div className="card-body">
                  <div className="employeeInfo ">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Employee Code</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Middle Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Access Card Id</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Gender</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Date of Joining</label>
                          <input
                            type="date"
                            className="form-control datepicker"
                          />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Date of Birth</label>
                          <input
                            type="date"
                            className="form-control datepicker"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Date of Conformation</label>
                          <input
                            type="date"
                            className="form-control datepicker"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Nationality</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Official Email</label>
                          <input type="Email" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Category</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Employee Subcategory</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Group Date of Joining</label>
                          <input
                            type="date"
                            className="form-control datepicker"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">&nbsp;</div>

                      <div className="col-md-3">&nbsp;</div>
                    </div>
                  </div>

                  <div className="employeeInfo ">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Company</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Branch</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Division</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Region</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Zone</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>State</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Sub State</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Location/District</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>HQ/Town</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Field HQ</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Functional Area</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Department</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Sub Department</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Floor</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>ERP Division</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Level</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Grade</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Designation</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Work Type</label>
                          <input type="Text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Employee Status</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="employeeInfo ">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Region</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Zone</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>State</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Sub State</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Location/District</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>HQ/Town</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Field HQ</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">&nbsp;</div>
                    </div>
                  </div>
                  <div className="employeeInfo ">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Reporting Name</label>
                          <div className="input-group">
                            <input type="text" className="form-control" />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <i className="fas fa-search"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Notice Priod</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Retirement Age</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">&nbsp;</div>
                    </div>
                  </div>
                  <div className="employeeInfo ">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>ESI Number</label>
                          <input type="Text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>PAN Number</label>
                          <input type="Text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>PF Number</label>
                          <input type="Text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Payment Mode</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>UAN Number</label>
                          <input type="Text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>AAdhar Number</label>
                          <input type="Text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Bank Account Number</label>
                          <input type="Text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">&nbsp;</div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Bank Name</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>test</option>
                            <option>test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Bank Branch</label>
                          <input type="Text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>IFSC Code</label>
                          <input type="Text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="communication"
              role="tabpanel"
              aria-labelledby="communication-tab2"
            >
              <div className="card">
                <div className="card-body">
                  <div className="employeeInfo ">
                    <div className="titleName">
                      <h6>Personal Address</h6>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-12">
                            <div class="form-group">
                              <label>Address</label>
                              <textarea
                                class="form-control"
                                rows={5}
                                style={{ height: "127px !important" }}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group">
                              <label>Country</label>
                              <select className="form-control">
                                <option>-- Select --</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="form-group">
                              <label>State</label>
                              <select className="form-control">
                                <option>-- Select --</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label>District</label>
                              <select className="form-control">
                                <option>-- Select --</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label>City</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label>Pincode</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-4">&nbsp;</div>
                        </div>
                      </div>
                    </div>
                    <div className="sameAddress">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          Same for Permanent Address
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="employeeInfo ">
                    <div className="titleName">
                      <h6>Permanent Address</h6>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-12">
                            <div class="form-group">
                              <label>Address</label>
                              <textarea
                                class="form-control"
                                rows={5}
                                style={{ height: "127px !important" }}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group">
                              <label>Country</label>
                              <select className="form-control">
                                <option>-- Select --</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="form-group">
                              <label>State</label>
                              <select className="form-control">
                                <option>-- Select --</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label>District</label>
                              <select className="form-control">
                                <option>-- Select --</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label>City</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label>Pincode</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-4">&nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="personal"
              role="tabpanel"
              aria-labelledby="personal-tab3"
            >
              <div className="card">
                <div className="card-body">
                  <div className="employeeInfo ">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Marital Status</label>
                          <select className="form-control">
                            <option>-- Select --</option>
                            <option>option</option>
                            <option>option</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Marriage Date</label>
                          <input type="Date" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Blood Group</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Personal Mobile No</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Official Mobile No</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Emergency Contact Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Emergency Contact No: 1</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Emergency Contact No: 2</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Personal email</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Father's/Spouse's Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Weight (in Kg)</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Height (in Feet)</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="employeeInfo ">
                    <div className="row">
                      <div className="col-md-6 d-flex align-items-center">
                        <div className="titleName">
                          <h6>Relation Ship</h6>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-end">
                        <button class="btn btn-outline-info px-4 my-2">
                          Add <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
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
                        {/* <DataGrid
                rows={[
                  {
                    id: 1,
                    col1: "Hello",
                    col2: "World",
                    col3: "World",
                    col4: "World",
                    col5: "World",
                    col6: "World",
                    col7: "World",
                  },
                  {
                    id: 2,
                    col1: "DataGridPro",
                    col2: "World",
                    col3: "World",
                    col4: "World",
                    col5: "World",
                    col6: "World",
                    col7: "World",
                  },
                  {
                    id: 3,
                    col1: "MUI",
                    col2: "World",
                    col3: "World",
                    col4: "World",
                    col5: "World",
                    col6: "World",
                    col7: "World",
                  }
                ]}
                columns={[
                  { field: "col1", headerName: "Name", width: 150 },
                  { field: "col2", headerName: "Relationship Type", width: 150 },
                  { field: "col3", headerName: "Dependancy", width: 150 },
                  { field: "col4", headerName: "Date of Birth", width: 150 },
                  { field: "col5", headerName: "Blood Group", width: 150 },
                  { field: "col6", headerName: "Gender", width: 150 },
                  { field: "col7", headerName: "Action", width: 150 },
                ]}
                sx={{ display: "flex", justifyContent: "center", width:"100%" }}
                
              /> */}
                      </div>
                    </div>
                  </div>
                  <div className="employeeInfo ">
                    <div className="row">
                      <div className="col-md-12">
                        <ul
                          className="nav nav-pills"
                          id="personalMyTab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link  active show"
                              id="skill-tab1"
                              data-toggle="tab"
                              href="#skill"
                              role="tab"
                              aria-controls="Skill"
                              aria-selected="true"
                            >
                              Skill
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="hobby-tab2"
                              data-toggle="tab"
                              href="#hobby"
                              role="tab"
                              aria-controls="Hobby"
                              aria-selected="false"
                            >
                              Hobby
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="cocurricular-tab3"
                              data-toggle="tab"
                              href="#cocurricular"
                              role="tab"
                              aria-controls="Cocurricular"
                              aria-selected="false"
                            >
                              Co-curricular
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="interest-tab4"
                              data-toggle="tab"
                              href="#interest"
                              role="tab"
                              aria-controls="Interest"
                              aria-selected="false"
                            >
                              Interest
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content" id="personalMyTabContent2">
                          <div
                            className="tab-pane fade active show"
                            id="skill"
                            role="tabpanel"
                            aria-labelledby="skill-tab1"
                          >
                            <div className="card">
                              <div className="card-body">
                                <div className="employeeInfo ">
                                  <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                      <div className="titleName">
                                        <h6>Skill</h6>
                                      </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                      <button class="btn btn-outline-info px-4 my-2">
                                        Add <i class="fa-solid fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">
                                              Relationship Type
                                            </th>
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
                          </div>
                          <div
                            className="tab-pane fade"
                            id="hobby"
                            role="tabpanel"
                            aria-labelledby="hobby-tab2"
                          >
                            <div className="card">
                              <div className="card-body">
                                <div className="employeeInfo ">
                                  <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                      <div className="titleName">
                                        <h6>Hobby</h6>
                                      </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                      <button class="btn btn-outline-info px-4 my-2">
                                        Add <i class="fa-solid fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">
                                              Relationship Type
                                            </th>
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
                          </div>
                          <div
                            className="tab-pane fade"
                            id="cocurricular"
                            role="tabpanel"
                            aria-labelledby="cocurricular-tab3"
                          >
                            <div className="card">
                              <div className="card-body">
                                <div className="employeeInfo ">
                                  <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                      <div className="titleName">
                                        <h6>Co-curricular</h6>
                                      </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                      <button class="btn btn-outline-info px-4 my-2">
                                        Add <i class="fa-solid fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">
                                              Relationship Type
                                            </th>
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
                          </div>
                          <div
                            className="tab-pane fade"
                            id="interest"
                            role="tabpanel"
                            aria-labelledby="interest-tab4"
                          >
                            <div className="card">
                              <div className="card-body">
                                <div className="employeeInfo ">
                                  <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                      <div className="titleName">
                                        <h6>Interest</h6>
                                      </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                      <button class="btn btn-outline-info px-4 my-2">
                                        Add <i class="fa-solid fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">
                                              Relationship Type
                                            </th>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="education"
              role="tabpanel"
              aria-labelledby="education-tab1"
            >
              <div className="card">
                              <div className="card-body">
                                <div className="employeeInfo ">
                                  <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                      <div className="titleName">
                                        <h6>Qualification</h6>
                                      </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                      <button class="btn btn-outline-info px-4 my-2">
                                        Add <i class="fa-solid fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">
                                              Relationship Type
                                            </th>
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
                                <div className="employeeInfo ">
                                  <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                      <div className="titleName">
                                        <h6>Experience</h6>
                                      </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                      <button class="btn btn-outline-info px-4 my-2">
                                        Add <i class="fa-solid fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">
                                              Relationship Type
                                            </th>
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
                                <div className="employeeInfo ">
                                  <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                      <div className="titleName">
                                        <h6>Activity</h6>
                                      </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                      <button class="btn btn-outline-info px-4 my-2">
                                        Add <i class="fa-solid fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">
                                              Relationship Type
                                            </th>
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
                                <div className="employeeInfo ">
                                  <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                      <div className="titleName">
                                        <h6>Scholarship</h6>
                                      </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                      <button class="btn btn-outline-info px-4 my-2">
                                        Add <i class="fa-solid fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">
                                              Relationship Type
                                            </th>
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
            </div>
            <div
              className="tab-pane fade"
              id="nomination"
              role="tabpanel"
              aria-labelledby="nomination-tab5"
            >
              <div className="card">
                <div className="card-body">
                <div className="employeeInfo ">
                    <div className="row">
                      <div className="col-md-12">
                        <ul
                          className="nav nav-pills"
                          id="nominationMyTab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link  active show"
                              id="pf-tab1"
                              data-toggle="tab"
                              href="#pf"
                              role="tab"
                              aria-controls="PF"
                              aria-selected="true"
                            >
                              PF
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="esi-tab2"
                              data-toggle="tab"
                              href="#esi"
                              role="tab"
                              aria-controls="ESI"
                              aria-selected="false"
                            >
                              ESI
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="gratuity-tab3"
                              data-toggle="tab"
                              href="#gratuity"
                              role="tab"
                              aria-controls="Gratuity"
                              aria-selected="false"
                            >
                              Gratuity
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="mediclaim-tab4"
                              data-toggle="tab"
                              href="#mediclaim"
                              role="tab"
                              aria-controls="Mediclaim"
                              aria-selected="false"
                            >
                              Mediclaim
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="insurance-tab5"
                              data-toggle="tab"
                              href="#insurance"
                              role="tab"
                              aria-controls="Insurance"
                              aria-selected="false"
                            >
                              Life Insurance
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content" id="nominationMyTabContent2">
                          <div
                            className="tab-pane fade active show"
                            id="pf"
                            role="tabpanel"
                            aria-labelledby="pf-tab1"
                          >
                            <div className="card">
                              <div className="card-body">
                                <div className="employeeInfo ">
                                  <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                      <div className="titleName">
                                        <h6>PF</h6>
                                      </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                      <button class="btn btn-outline-info px-4 my-2">
                                        Add <i class="fa-solid fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">
                                              Relationship Type
                                            </th>
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
                          </div>
                          <div
                            className="tab-pane fade"
                            id="esi"
                            role="tabpanel"
                            aria-labelledby="esi-tab2"
                          >
                            <div className="card">
                              <div className="card-body">
                                <div className="employeeInfo ">
                                  <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                      <div className="titleName">
                                        <h6>ESI</h6>
                                      </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                      <button class="btn btn-outline-info px-4 my-2">
                                        Add <i class="fa-solid fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">
                                              Relationship Type
                                            </th>
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
                          </div>
                          <div
                            className="tab-pane fade"
                            id="gratuity"
                            role="tabpanel"
                            aria-labelledby="gratuity-tab3"
                          >
                            <div className="card">
                              <div className="card-body">
                                <div className="employeeInfo ">
                                  <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                      <div className="titleName">
                                        <h6>Gratuity</h6>
                                      </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                      <button class="btn btn-outline-info px-4 my-2">
                                        Add <i class="fa-solid fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">
                                              Relationship Type
                                            </th>
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
                          </div>
                          <div
                            className="tab-pane fade"
                            id="mediclaim"
                            role="tabpanel"
                            aria-labelledby="mediclaim-tab4"
                          >
                            <div className="card">
                              <div className="card-body">
                                <div className="employeeInfo ">
                                  <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                      <div className="titleName">
                                        <h6>Mediclaim</h6>
                                      </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                      <button class="btn btn-outline-info px-4 my-2">
                                        Add <i class="fa-solid fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">
                                              Relationship Type
                                            </th>
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
                          </div>
                          <div
                            className="tab-pane fade"
                            id="insurance"
                            role="tabpanel"
                            aria-labelledby="insurance-tab5"
                          >
                            <div className="card">
                              <div className="card-body">
                                <div className="employeeInfo ">
                                  <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                      <div className="titleName">
                                        <h6>Life Insurance</h6>
                                      </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                      <button class="btn btn-outline-info px-4 my-2">
                                        Add <i class="fa-solid fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">
                                              Relationship Type
                                            </th>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Box
        sx={{
          maxWidth: { xs: "100%", sm: "100%" },
          bgcolor: "background.paper",
          marginTop:"2em"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{ borderBottom: "1px solid #ccc" }}
        >
          <Tab label="Professional" icon={<BadgeIcon />} />
          <Tab label="Communication" icon={<ContactMailIcon />} />
          <Tab label="Personal" icon={<ContactEmergencyIcon />} />
          <Tab
            label="Education Qualification"
            icon={<ContactPhoneIcon />}
          />
          <Tab label="Nomination" icon={<PermContactCalendarIcon />} />
        </Tabs>
        <TabPanel value={value} index={0}>
        
         <Grid container sx={{ backgroundColor: "#f6f8f9" }}>
        <Grid
          rows
          mx={2}
          my={2}
          md={12}
          direction={"row"}
          display={"flex"}
        >
          <Grid md={12}>
            <Typography variant="h5">Create Users</Typography> 
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1 ,minWidth:"195px"},
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#fff",
                alignContent: "center",
                margin: "1em",
                flexDirection: "column",
                padding: "1em",
              }}
              noValidate
              autoComplete="off"
            >
              <Grid container md={12}>
                <Grid
                  md={3}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Full Name"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>

                <Grid
                  md={3}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Email"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>

                <Grid
                  md={3}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Phone No"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                <Grid
                  md={3}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    
                  >
                    <DemoContainer
                      components={["DatePicker"]}
                      
                    >
                      <DatePicker
                        label="Date of Birth"
                        
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid
                  md={3}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, width: "90% !important" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={gender}
                      onChange={handlegenderChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Male</MenuItem>
                      <MenuItem value={20}>Female</MenuItem>
                      <MenuItem value={30}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  md={3}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                <Grid
                  md={3}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Status"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                <Grid
                  md={3}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Role"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                <Grid
                  md={3}
                  mb={2}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography variant="h6" sx={{ fontSize: "1em", px: 3 }}>
                    Upload Image
                  </Typography>
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Grid>
                <Grid
                  md={3}
                  mb={2}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography variant="h6" sx={{ fontSize: "1em", px: 3 }}>
                    Upload Documents
                  </Typography>
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Grid>
                <Grid
                  md={3}
                  mb={2}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography variant="h6" sx={{ fontSize: "1em", px: 3 }}>
                    Upload Signature
                  </Typography>
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Grid>
                <Grid
                  md={3}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                ></Grid>
              </Grid>
              <Grid container md={12}>
                <Grid
                  rows
                  md={12}
                  mt={8}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    sx={{ width: "60%" }}
                    endIcon={<SendIcon />}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid> 
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </Box> */}
      {/* <Grid container sx={{ backgroundColor: "#f6f8f9" }}>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <RouterLink to={"/"}>Home</RouterLink>
              <RouterLink to={"/Users"}>Employee & Users</RouterLink>
              <Typography color="text.primary">Create Users</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Grid> */}
    </>
  );
}
