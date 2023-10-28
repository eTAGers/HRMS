import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Box, Grid, Modal, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

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
export default function Assignwork() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [priority, setPriority] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [employee, setEmployee] = React.useState("");
  const [status, setStatus] = React.useState("");

  const handledPriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handledDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };
  const handledEmployeeChange = (event) => {
    setEmployee(event.target.value);
  };

  const handledStatusChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <>
      <Grid container>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <RouterLink to={"/"}>Home</RouterLink>
              <RouterLink to={"/Assignwork"}>Employee & Daily Tasks</RouterLink>
              <Typography color="text.primary">Assign Work</Typography>
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
            <h4>Work</h4>
          </Grid>
          <Grid md={6} style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={handleOpen}>
              + Create Work
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
              { field: "col1", headerName: "Start Date", width: 150 },
              { field: "col2", headerName: "End Date", width: 150 },
              { field: "col3", headerName: "Title", width: 150 },
              { field: "col4", headerName: "Department", width: 150 },
              { field: "col5", headerName: "Team", width: 150 },
              { field: "col6", headerName: "Priority", width: 150 },
              { field: "col7", headerName: "Status", width: 150 },
              { field: "col8", headerName: "Action", width: 150 },
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
                <Typography variant="h5">Create New Work</Typography>
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
                        id="filled-multiline-static"
                        label="Title"
                        variant="filled"
                        sx={{ width: "96% !important" }}
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
                        label="Description"
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
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        sx={{ width: "90% !important" }}
                      >
                        <DemoContainer
                          components={["DatePicker"]}
                          sx={{ width: "95% !important" }}
                        >
                          <DatePicker
                            label="End Date"
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
                      <FormControl
                        variant="filled"
                        sx={{ m: 1, width: "90% !important" }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          Priority
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={priority}
                          onChange={handledPriorityChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={0}>Low</MenuItem>
                          <MenuItem value={1}>Medium</MenuItem>
                          <MenuItem value={2}>High</MenuItem>
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
                          Department
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={department}
                          onChange={handledDepartmentChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={0}>All</MenuItem>
                          <MenuItem value={1}>IT</MenuItem>
                          <MenuItem value={2}>Software</MenuItem>
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
                          onChange={handledEmployeeChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={0}>All</MenuItem>
                          <MenuItem value={1}>Mani</MenuItem>
                          <MenuItem value={2}>Vel</MenuItem>
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
                          Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={status}
                          onChange={handledStatusChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={0}>Active</MenuItem>
                          <MenuItem value={1}>Progress</MenuItem>
                          <MenuItem value={2}>Not Start</MenuItem>
                          <MenuItem value={3}>Block</MenuItem>
                        </Select>
                      </FormControl>
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
