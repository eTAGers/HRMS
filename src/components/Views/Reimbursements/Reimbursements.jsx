import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Box, Grid, Modal } from "@mui/material";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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
export default function Reimbursement() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid container>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <RouterLink to={"/"}>Home</RouterLink>
              <RouterLink to={"/Reimbursement"}>
                Loans & Reimbursement
              </RouterLink>
              <Typography color="text.primary">Reimbursement</Typography>
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
            <h4>Reimbursement</h4>
          </Grid>
          <Grid md={6} style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={handleOpen}>
              + Create Reimbursement
            </Button>
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
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}
          />
        </Grid>
      </Grid>

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
                <Typography variant="h5">Create Reimbursement</Typography>
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
                        label="Employee"
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
                        label="Amount"
                        variant="filled"
                        sx={{ width: "90% !important" }}
                      />
                    </Grid>
                    <Grid
                      md={6}
                      mb={2}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        sx={{ width: "90% !important" }}
                      >
                        <DemoContainer
                          components={["DatePicker"]}
                          sx={{ width: "95% !important" }}
                        >
                          <DatePicker
                            label="Date"
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
                      <TextField
                        required
                        id="filled-required"
                        label="Status"
                        variant="filled"
                        sx={{ width: "90% !important" }}
                      />
                    </Grid>
                    <Grid md={6} mb={2}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1em",
                          paddingRight: "24px",
                          paddingLeft: "8px",
                        }}
                      >
                        File
                      </Typography>
                      <Button
                        component="label"
                        variant="outlined"
                        startIcon={<CloudUploadIcon />}
                        sx={{ marginLeft: "8px" }}
                      >
                        Upload
                        <VisuallyHiddenInput type="file" />
                      </Button>
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
                        sx={{ width: "96% !important" }}
                      />
                    </Grid>
                    <Grid
                      md={6}
                      mb={2}
                      sx={{ display: "flex", justifyContent: "center" }}
                    ></Grid>
                  </Grid>
                  <Grid container md={12}>
                    <Grid
                      rows
                      md={12}
                      mt={2}
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
        </Box>
      </Modal>
    </>
  );
}
