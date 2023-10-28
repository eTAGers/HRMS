import React from "react";
import { Grid,Box } from "@mui/material";
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
export default function Resignation() {
    const [usertype, setUserType] = React.useState("");
  const [username, setUserName] = React.useState("");

  const handledUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handledUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  return (
    <>
      <Grid container sx={{ backgroundColor: "#f6f8f9" }}>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <RouterLink to={"/"}>Home</RouterLink>
              <RouterLink to={"/Createdailyexpance"}>Daily Expence</RouterLink>
              <Typography color="text.primary">
              Create Daily Expence
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
            <Typography variant="h5">Create Daily Expence</Typography>
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
                      sx={{ m: 1, width: "95% !important" }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        User Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={usertype}
                        onChange={handledUserTypeChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={0}>Employee</MenuItem>
                        <MenuItem value={1}>Client</MenuItem>
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
                      sx={{ m: 1, width: "95% !important" }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                       User Name
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={username}
                        onChange={handledUserNameChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Mani</MenuItem>
                        <MenuItem value={2}>Vel</MenuItem>
                        <MenuItem value={3}>Venkat</MenuItem>
                        <MenuItem value={4}>Muthu</MenuItem>
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
                    label="Remaining Amount"
                    variant="filled"
                    sx={{ width: "95% !important" }}
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
                    label="Advance Amount"
                    variant="filled"
                    sx={{ width: "95% !important" }}
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
                    label="Total Advance Amount"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>
                  <Grid
                    md={6}
                    mb={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                  <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ width: "90% !important" }}>
                    <DemoContainer components={["DatePicker"]} sx={{ width: "95% !important" }}>
                      <DatePicker
                        label="Advance Date"
                        sx={{ width: "100% !important" }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
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
