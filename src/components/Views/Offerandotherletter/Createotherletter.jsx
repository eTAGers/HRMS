import React from "react";
import { Grid, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SendIcon from "@mui/icons-material/Send";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import ReactQuill from 'react-quill';
export default function Createotherletter() {
  const [employee, setEmployeeChange] = React.useState("");
  const [lettertype, setLetterTypeChange] = React.useState("");

  const handledemployeeChange = (event) => {
    setEmployeeChange(event.target.value);
  };

  const handledLetterTypeChange = (event) => {
    setLetterTypeChange(event.target.value);
  };

  const [richtextbox, setRichTextbox] = React.useState("");
  const handledRichTextboxChange = (event) => {
    setRichTextbox(event.target.value);
  };
  return (
    <>
      <Grid container sx={{ backgroundColor: "#f6f8f9" }}>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <RouterLink to={"/"}>Home</RouterLink>
              <RouterLink to={"/Otheroffer"}>Other Letter</RouterLink>
              <Typography color="text.primary">Create Letter</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Grid>

      <Grid container sx={{ backgroundColor: "#f6f8f9" }}>
        <Grid
          rows
          mx={"3.8rem"}
          mt={4}
          md={12}
          direction={"row"}
          display={"flex"}
        >
          <Grid md={12}>
            <Typography variant="h5">Create Letter</Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#fff",
                alignContent: "center",
                margin: "1em",
                flexDirection: "column",
                padding: "3em 2em",
              }}
              noValidate
              autoComplete="off"
            >
              <Grid container md={12}>
                <Grid
                  md={12}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                   <FormControl
                    variant="filled"
                    sx={{ m: 1, width: "95% !important" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                    Letter Type 
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={lettertype}
                      onChange={handledLetterTypeChange}
                    >
                    <MenuItem data-val="1" value="Warning Letter" data-select2-id="18">Warning Letter</MenuItem>
                    <MenuItem data-val="2" value="Insubordination Letter" data-select2-id="19">Insubordination Letter</MenuItem>
                    <MenuItem data-val="3" value="Irregular Attendance Notice" data-select2-id="20">Irregular Attendance Notice</MenuItem>
                    <MenuItem data-val="4" value="Suspension Letter" data-select2-id="21">Suspension Letter</MenuItem>
                    <MenuItem data-val="5" value="Promotion Letter" data-select2-id="22">Promotion Letter</MenuItem>
                      
                    </Select>
                  </FormControl>
                </Grid>

                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, width: "90% !important" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                    Employee 
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={employee}
                      onChange={handledemployeeChange}
                    >
                      <MenuItem value={1}>Mani</MenuItem>
                      <MenuItem value={2}>Vel</MenuItem>
                      <MenuItem value={3}>Muthu</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
            

                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Title"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>

                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Reference Number"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center"}}
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    sx={{ width: "90% !important"}}
                  >
                    <DemoContainer
                      components={["DatePicker"]}
                      sx={{ width: "95% !important",margin:"0px",padding:"0px" }}
                    >
                      <DatePicker
                        label="Date"
                        sx={{ width: "100% !important" }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                
               
                <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
        <ReactQuill
          value={richtextbox}
          onChange={handledRichTextboxChange} 
          style={{width:"95%",height:"250px",paddingBottom:"3em"}}
        />
                </Grid>
              </Grid>
              <Grid container md={12}>
                <Grid
                  rows
                  md={12}
                  mt={4}
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
    </>
  );
}
