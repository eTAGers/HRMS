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
export default function Viewleaves() {
  const [gender, setGender] = React.useState("");
  const { sticky, stickyRef } = useSticky();
  const handlegenderChange = (event) => {
    setGender(event.target.value);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [tabValue, settabValue] = React.useState(2);

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
          <Tab label="View Leaves" href="/Leaves/Viewleaves" />
          <Tab label="Holidays" href="/Holidays" />
          </Tabs>
        </div>
      </nav>
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
      <div className="card">
        <div className="card-body">
          
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
