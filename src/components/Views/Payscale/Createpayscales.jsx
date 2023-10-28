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

export default function Createpayscales() {
  const [allowance, setallowance] = React.useState("");
  const [deduction, setdeductions] = React.useState("");

  const handleallowanceChange = (event) => {
    setallowance(event.target.value);
  };

  const handledeductChange = (event) => {
    setdeductions(event.target.value);
  };
  return (
    <>
      <Grid container sx={{ backgroundColor: "#f6f8f9" }}>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <RouterLink to={"/"}>Home</RouterLink>
              <RouterLink to={"/Payscales"}>Payscales</RouterLink>
              <Typography color="text.primary">
                Create Createpayscales
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
            <Typography variant="h5">Create Users</Typography>
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
                  <TextField
                    required
                    id="filled-required"
                    label="PayScale Name"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>

                <Grid
                  md={12}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Basic Salary"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>
                <Grid
                  md={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Grid
                    md={5}
                    mb={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <FormControl
                      variant="filled"
                      sx={{ m: 1, width: "90% !important" }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Allowances
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={allowance}
                        onChange={handleallowanceChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>House Rent Allowance</MenuItem>
                        <MenuItem value={2}>Entertainment Allowance</MenuItem>
                        <MenuItem value={3}>Medical Allowance</MenuItem>
                        <MenuItem value={4}>Special Allowance</MenuItem>
                        <MenuItem value={5}>Leave Allowance</MenuItem>
                        <MenuItem value={6}>Travel Allowance</MenuItem>
                        <MenuItem value={7}>Other Allowance</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid
                    md={5}
                    mb={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <TextField
                      required
                      id="filled-required"
                      label="Amount"
                      variant="filled"
                      sx={{ width: "95% !important" }}
                    />
                  </Grid>
                  <Grid
                    md={2}
                    mb={2}
                    sx={{ display: "flex", justifyContent: "center",alignItems:"center" }}
                  >
                     <Button variant="outlined">
                    <AddIcon />
                  </Button>
                  </Grid>
                </Grid>
                <Grid
                  md={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Grid
                    md={5}
                    mb={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <FormControl
                      variant="filled"
                      sx={{ m: 1, width: "90% !important" }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Deductions
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={deduction}
                        onChange={handledeductChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>PF</MenuItem>
                        <MenuItem value={2}>ESI</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid
                    md={5}
                    mb={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <TextField
                      required
                      id="filled-required"
                      label="Amount"
                      variant="filled"
                      sx={{ width: "95% !important" }}
                    />
                  </Grid>

                  <Grid
                    md={2}
                    mb={2}
                    sx={{ display: "flex", justifyContent: "center",alignItems:"center" }}
                  >
                    <Button variant="outlined">
                      <AddIcon />
                    </Button>
                  </Grid>
                </Grid>
                <Grid
                  md={12}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Total Salary"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
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
                    label="Note"
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
