import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { DataGrid } from "@mui/x-data-grid";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

import SendIcon from '@mui/icons-material/Send';import PrintIcon from '@mui/icons-material/Print';
export default function Attedancereport() {
   
    const [employeechange, setEmployeechange] = React.useState("");
    const [yearchange, setYearchange] = React.useState("");
    const [monthchange, setMonthchange] = React.useState("");

  const handleEmpChange = (event) => {
    setEmployeechange(event.target.value);
  };
  const handleYearChange = (event) => {
    setYearchange(event.target.value);
  };
  const handleMonthChange = (event) => {
    setMonthchange(event.target.value);
  };
  return (
    <>
      <Grid container>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <RouterLink to={"/"}>Home</RouterLink>
              <RouterLink to={"/Attedance/Attedancereport"}>Attedance</RouterLink>
              <Typography color="text.primary">Attedance Report</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          rows
          mx={"3.8rem"}
          mt={4}
          md={12}
          direction={"row"}
          display={"flex"}
        >
          <Grid md={6}>
            <h4>Attedance Report</h4>
          </Grid>
          <Grid md={6}></Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          rows
          mx={"3.8rem"}
          mt={4}
          md={12}
          direction={"row"}
          display={"flex"}
        >
          <Grid md={12}>
          <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#fff",
                alignContent:"center",
                margin: "1em",
                flexDirection:"column",
                padding: "3em 2em",
              }}
              noValidate
              autoComplete="off"
            >
              <Grid container md={12}>
                
                 <Grid md={3} mb={2} sx={{display:"flex",justifyContent:"center"}}>
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
                      value={employeechange}
                      onChange={handleEmpChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>All</MenuItem>
                      <MenuItem value={2}>Mani</MenuItem>
                      <MenuItem value={3}>Muth</MenuItem>
                      <MenuItem value={4}>Vel</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                 <Grid md={3} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, width: "90% !important" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Year
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={yearchange}
                      onChange={handleYearChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>2023</MenuItem>
                      <MenuItem value={2}>2022</MenuItem>
                      <MenuItem value={3}>2021</MenuItem>
                      <MenuItem value={4}>2020</MenuItem>
                      <MenuItem value={5}>2019</MenuItem>
                      <MenuItem value={6}>2018</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                 <Grid md={3} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, width: "90% !important" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Month
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={monthchange}
                      onChange={handleMonthChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>Janury</MenuItem>
                      <MenuItem value={2}>Februry</MenuItem>
                      <MenuItem value={3}>March</MenuItem>
                      <MenuItem value={4}>April</MenuItem>
                      <MenuItem value={5}>May</MenuItem>
                      <MenuItem value={6}>June</MenuItem>
                      <MenuItem value={7}>July</MenuItem>
                      <MenuItem value={8}>August</MenuItem>
                      <MenuItem value={9}>September</MenuItem>
                      <MenuItem value={10}>October</MenuItem>
                      <MenuItem value={11}>November</MenuItem>
                      <MenuItem value={12}>December</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid md={3} mb={2} sx={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                <Button variant="contained" sx={{width:"40%", marginRight:2}} endIcon={<SendIcon />}>Submit</Button>
                <Button variant="contained" sx={{width:"40%", marginRight:2}} endIcon={<PrintIcon />}>Print</Button>
                </Grid>
              </Grid>
              
            </Box>
          </Grid>
        </Grid>
      </Grid>
      
      <Grid container md={12}>
        <Grid rows p={"2rem 3.8rem"} md={12}>
          <DataGrid
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
              },
              {
                id: 4,
                col1: "DataGridPro",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
                col7: "World",
              },
              {
                id: 5,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
                col7: "World",
              },
              {
                id: 6,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
                col7: "World",
              },
              {
                id: 7,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
                col7: "World",
              },
              {
                id: 8,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
                col7: "World",
              },
              {
                id: 9,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
                col7: "World",
              },
            ]}
            columns={[
              { field: "col1", headerName: "ID", width: 150 },
              { field: "col2", headerName: "Employee", width: 150 },
              { field: "col3", headerName: "1", width: 150 },
              { field: "col4", headerName: "Total Leaves", width: 150 },
              { field: "col5", headerName: "Total Present", width: 150 },
              { field: "col6", headerName: "Total Absent", width: 150 },
              { field: "col7", headerName: "Total Working Hours", width: 150 },
            ]}
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}
          />
        </Grid>
      </Grid>
    </>
  );
}
