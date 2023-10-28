import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Addleave() {
  const [employeeinfo, setemployeeinfo] = React.useState("");
  const [leavetype, setleavetype] = React.useState("");

  const handledLeaveTypeChange = (event) => {
    setleavetype(event.target.value);
  };

  const handleEmployeeInfoChange = (event) => {
    setemployeeinfo(event.target.value);
  };
  return (
    <>
      <Grid container sx={{ backgroundColor: "#f6f8f9" }}>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <RouterLink to={"/"}>Home</RouterLink>
              <RouterLink to={"/Leaves"}>Leaves and Resignation</RouterLink>
              <Typography color="text.primary">
                Add Leave
              </Typography>
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
            <Typography variant="h5">Add Leave</Typography>
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
                        value={employeeinfo}
                        onChange={handleEmployeeInfoChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={0}>All</MenuItem>
                        <MenuItem value={1}>Mani</MenuItem>
                        <MenuItem value={2}>Vel</MenuItem>
                        <MenuItem value={3}>Bala</MenuItem>
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
                        Leave Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={leavetype}
                        onChange={handledLeaveTypeChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>EL</MenuItem>
                        <MenuItem value={2}>SL</MenuItem>
                        <MenuItem value={3}>Comp off</MenuItem>
                        <MenuItem value={4}>ML</MenuItem>
                      </Select>
                    </FormControl>
                </Grid>
                  <Grid
                    md={6}
                    mb={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                  <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ width: "90% !important" }}>
                    <DemoContainer components={["DatePicker"]} sx={{ width: "95% !important" }}>
                      <DatePicker
                        label="Start Date"
                        sx={{ width: "100% !important" }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  </Grid>
                  <Grid
                    md={6}
                    mb={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                   <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ width: "90% !important" }}>
                    <DemoContainer components={["DatePicker"]} sx={{ width: "95% !important" }}>
                      <DatePicker
                        label="End Date"
                        sx={{ width: "100% !important" }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  </Grid>
                 
                <Grid
                  md={12}
                  mb={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TextField
                    id="filled-multiline-static"
                    label="Reason"
                    multiline
                    rows={4}
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>
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
    </>
  );
}
