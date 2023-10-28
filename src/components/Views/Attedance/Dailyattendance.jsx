import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
export default function Dailyattedance() {
  return (
    <>
      <Grid container>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <RouterLink to={"/"}>Home</RouterLink>
              <RouterLink to={"/Attedance/Dailyattedance"}>Attedance</RouterLink>
              <Typography color="text.primary">Daily Attedance</Typography>
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
            <h4>Daily Attedance</h4>
          </Grid>
          <Grid md={6}></Grid>
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
              { field: "col3", headerName: "Shift", width: 150 },
              { field: "col4", headerName: "Checkin Time", width: 150 },
              { field: "col5", headerName: "Checkout Time", width: 150 },
              { field: "col6", headerName: "Total Working Hours", width: 150 },
              { field: "col7", headerName: "Status", width: 150 },
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
