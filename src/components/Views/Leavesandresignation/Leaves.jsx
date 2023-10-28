import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
export default function Leaves() {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#f6f8f9" }}>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <RouterLink to={"/"}>Home</RouterLink>
              <RouterLink to={"/Leaves"}>Leaves and Resigntion</RouterLink>
              <Typography color="text.primary">
                Leaves
              </Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Grid>
      <Grid container >
      <Grid rows mx={"3.8rem"} mt={4} md={12} direction={"row"} display={"flex"}>
          <Grid md={6}>
            <h4>Leaves</h4>
          </Grid>
          <Grid md={6} style={{display:"flex",justifyContent:"flex-end"}}>
           <RouterLink to={"/Leaves/Addleaves"}> <Button variant="contained">+ Create Leaves</Button></RouterLink>
          </Grid>
        </Grid>
        </Grid>
        <Grid container md={12}><Grid rows p={"2rem 3.8rem"} md={12}> 
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
              },
              {
                id: 2,
                col1: "DataGridPro",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
              {
                id: 3,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
              {
                id: 4,
                col1: "DataGridPro",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
              {
                id: 5,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
              {
                id: 6,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
              {
                id: 7,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
              {
                id: 8,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
              {
                id: 9,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
              {
                id: 10,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
            ]}
            columns={[
              { field: "col1", headerName: "Employee Id", width: 150 },
              { field: "col2", headerName: "Name", width: 150 },
              { field: "col3", headerName: "Leave Type", width: 150 },
              { field: "col4", headerName: "Duration", width: 150 },
              { field: "col5", headerName: "Date", width: 150 },
              { field: "col6", headerName: "Range", width: 150 },
              { field: "col7", headerName: "Status", width: 150 },
              { field: "col8", headerName: "Action", width: 150 },
            ]}
            sx={{ display: "flex", justifyContent: "center", width:"100%" }}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}
          /></Grid></Grid>
    </>
  );
}
