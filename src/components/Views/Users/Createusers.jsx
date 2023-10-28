import React from "react";
import TextField from "@mui/material/TextField";
import { AppBar, Box, Toolbar } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useSticky from "./Strickyheader";
import classNames from "classnames";
import BadgeIcon from "@mui/icons-material/Badge";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import ContactMailIcon from "@mui/icons-material/ContactMail";
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
                className="nav-link"
                id="home-tab3"
                data-toggle="tab"
                href="#home3"
                role="tab"
                aria-controls="Professional"
                aria-selected="false"
              >
                Professional
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active show"
                id="profile-tab3"
                data-toggle="tab"
                href="#profile3"
                role="tab"
                aria-controls="Communication"
                aria-selected="true"
              >
                Communication
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="contact-tab3"
                data-toggle="tab"
                href="#contact3"
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
                id="contact-tab3"
                data-toggle="tab"
                href="#contact3"
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
                id="contact-tab3"
                data-toggle="tab"
                href="#contact3"
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
              className="tab-pane fade"
              id="home3"
              role="tabpanel"
              aria-labelledby="home-tab3"
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
              className="tab-pane fade active show"
              id="profile3"
              role="tabpanel"
              aria-labelledby="profile-tab3"
            >
              Sed sed metus vel lacus hendrerit tempus. Sed efficitur velit
              tortor, ac efficitur est lobortis quis. Nullam lacinia metus erat,
              sed fermentum justo rutrum ultrices. Proin quis iaculis tellus.
              Etiam ac vehicula eros, pharetra consectetur dui.
            </div>
            <div
              className="tab-pane fade"
              id="contact3"
              role="tabpanel"
              aria-labelledby="contact-tab3"
            >
              Vestibulum imperdiet odio sed neque ultricies, ut dapibus mi
              maximus. Proin ligula massa, gravida in lacinia efficitur,
              hendrerit eget mauris. Pellentesque fermentum, sem interdum
              molestie finibus, nulla diam varius leo, nec varius lectus elit id
              dolor.
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
