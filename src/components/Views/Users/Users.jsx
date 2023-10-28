import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

export default function Users() {
  return (
    <>
      <Grid container>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <RouterLink to={"/"}>
                Home
              </RouterLink>
              <RouterLink
                 to={"/Users"}
              >
                Employee & Users
              </RouterLink>
              <Typography color="text.primary">Users</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Grid>
      <Grid container id="base1">
      <Grid rows mx={"3.8rem"} mt={4} md={12} direction={"row"} display={"flex"}>
          <Grid md={6}>
            <h4>Users</h4>
          </Grid>
          <Grid md={6} style={{display:"flex",justifyContent:"flex-end"}}>
           <RouterLink to={"/Users/Createusers"}> <Button variant="contained">+ Create Users</Button></RouterLink>
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
              {
                id: 11,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
              {
                id: 12,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
              {
                id: 13,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
              {
                id: 14,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
              {
                id: 15,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
              {
                id: 16,
                col1: "MUI",
                col2: "World",
                col3: "World",
                col4: "World",
                col5: "World",
                col6: "World",
              },
            ]}
            columns={[
              { field: "col1", headerName: "Column 1", width: 150 },
              { field: "col2", headerName: "Column 2", width: 150 },
              { field: "col3", headerName: "Column 3", width: 150 },
              { field: "col4", headerName: "Column 4", width: 150 },
              { field: "col5", headerName: "Column 5", width: 150 },
              { field: "col6", headerName: "Column 6", width: 150 },
            ]}
            sx={{ display: "flex", justifyContent: "center", width:"100%" }}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}
          /></Grid></Grid>
          <Grid container id="base2">
          <Grid rows mx={"3.8rem"} mt={4} md={12} direction={"row"} display={"flex"}>
              <Grid md={6}>
                <h4>Users2</h4>
              </Grid>
              <Grid md={6} style={{display:"flex",justifyContent:"flex-end"}}>
               <RouterLink to={"/Users/Createusers"}> <Button variant="contained">+ Create Users2</Button></RouterLink>
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
                  {
                    id: 11,
                    col1: "MUI",
                    col2: "World",
                    col3: "World",
                    col4: "World",
                    col5: "World",
                    col6: "World",
                  },
                  {
                    id: 12,
                    col1: "MUI",
                    col2: "World",
                    col3: "World",
                    col4: "World",
                    col5: "World",
                    col6: "World",
                  },
                  {
                    id: 13,
                    col1: "MUI",
                    col2: "World",
                    col3: "World",
                    col4: "World",
                    col5: "World",
                    col6: "World",
                  },
                  {
                    id: 14,
                    col1: "MUI",
                    col2: "World",
                    col3: "World",
                    col4: "World",
                    col5: "World",
                    col6: "World",
                  },
                  {
                    id: 15,
                    col1: "MUI",
                    col2: "World",
                    col3: "World",
                    col4: "World",
                    col5: "World",
                    col6: "World",
                  },
                  {
                    id: 16,
                    col1: "MUI",
                    col2: "World",
                    col3: "World",
                    col4: "World",
                    col5: "World",
                    col6: "World",
                  },
                ]}
                columns={[
                  { field: "col1", headerName: "Column 1", width: 150 },
                  { field: "col2", headerName: "Column 2", width: 150 },
                  { field: "col3", headerName: "Column 3", width: 150 },
                  { field: "col4", headerName: "Column 4", width: 150 },
                  { field: "col5", headerName: "Column 5", width: 150 },
                  { field: "col6", headerName: "Column 6", width: 150 },
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
