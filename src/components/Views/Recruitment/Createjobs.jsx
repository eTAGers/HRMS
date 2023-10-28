import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import SendIcon from '@mui/icons-material/Send';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

export default function Createjobs() {
  const [richtextbox, setRichTextbox] = React.useState("");
  const handledRichTextboxChange = (event) => {
    setRichTextbox(event.target.value);
  };
  return (
    <>
      <Grid container sx={{ backgroundColor: "#f6f8f9" }}>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <RouterLink to={"/"}>
                Home
              </RouterLink>
              <RouterLink
                 to={"/Createjobs"}
              >
               Jobs
              </RouterLink>
              <Typography color="text.primary">Create Jobs</Typography>
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
            <Typography variant="h5">Create Jobs</Typography>
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
                <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Title"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>

                 <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Experience"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>

                <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ width: "90% !important" }}>
                    <DemoContainer components={["DatePicker"]} sx={{ width: "92% !important" }}>
                      <DatePicker
                        label="Expiry Date"
                        sx={{ width: "100% !important" }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                 <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Location"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
        <ReactQuill
          value={richtextbox}
          onChange={handledRichTextboxChange} 
          style={{width:"90%",height:"250px",paddingBottom:"3em"}}
        />
                </Grid>
                 
                <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Required Skills"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Status"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
              </Grid>
              <Grid container md={12}>
                <Grid rows  md={12} mt={8} sx={{display:"flex",justifyContent:"center"}}>
                <Button variant="contained" sx={{width:"60%"}} endIcon={<SendIcon />}>Submit</Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
