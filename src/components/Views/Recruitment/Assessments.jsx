import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Box, Grid, Modal, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    height: 350,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
export default function Assessments() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                 to={"/Assessments"}
              >
               Recruitment
              </RouterLink>
              <Typography color="text.primary">Assessments</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Grid>
      <Grid container >
      <Grid rows mx={"3.8rem"} mt={4} md={12} direction={"row"} display={"flex"}>
          <Grid md={6}>
            <h4>Assessments</h4>
          </Grid>
          <Grid md={6} style={{display:"flex",justifyContent:"flex-end"}}>
           <Button variant="contained" onClick={handleOpen}>+ Create Assessments</Button>
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
              { field: "col1", headerName: "Id", width: 150 },
              { field: "col2", headerName: "Name", width: 150 },
              { field: "col3", headerName: "Create Date", width: 150 },
              { field: "col4", headerName: "Actions", width: 150 },
              { field: "col5", headerName: "Column 5", width: 150 },
              { field: "col6", headerName: "Column 6", width: 150 },
            ]}
            sx={{ display: "flex", justifyContent: "center", width:"100%" }}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}
          /></Grid></Grid>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid
            container
            sx={{
              backgroundColor: "#f6f8f9",
              height: "100%",
              overflow: "auto",
            }}
          >
            <Grid
              rows
              mx={"1.8rem"}
              mt={4}
              md={12}
              direction={"row"}
              display={"flex"}
            >
              <Grid md={12}>
                <Typography variant="h5">Add New Assessment</Typography>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { width: "25ch" },
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    alignContent: "center",
                    margin: "1em 0",
                    flexDirection: "column",
                    padding: "1em 1em",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Grid container md={12}>
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
                        id="filled-required"
                        label="Name"
                        variant="filled"
                        sx={{ width: "96% !important" }}
                      />
                    </Grid>
                    
                  </Grid>
                  <Grid container md={12}>
                    <Grid
                      rows
                      md={12}
                      mt={2}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                    <Grid
                     md={6}
                     mb={2}
                     sx={{ display: "flex", justifyContent: "center" }}
                   >
                   <Button
                     variant="contained"
                     sx={{ width: "60%" }}
                   >
                     Submit
                   </Button></Grid>
                         <Grid
                      md={6}
                      mb={2}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                    <Button variant="outlined" sx={{ width: "60%" }}>
        Discard
      </Button></Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
