import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import SendIcon from '@mui/icons-material/Send';
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

export default function Createcandidates() {
  const [gender, setGender] = React.useState("");

  const handlegenderChange = (event) => {
    setGender(event.target.value);
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
                 to={"/Createcandidates"}
              >
                Employee & Users
              </RouterLink>
              <Typography color="text.primary">Create Candidates</Typography>
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
            <Typography variant="h5">Create Candidates</Typography>
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
                <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                <FormControl
                    variant="filled"
                    sx={{ m: 1, width: "90% !important" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                    Employee Type 
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={gender}
                      onChange={handlegenderChange}
                    >
                      <MenuItem value={1}>Fresher</MenuItem>
                      <MenuItem value={2}>Experience</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="FullName"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>

                <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Email"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>

                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Phone No"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                
                <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Local Address"
                    variant="filled"
                    multiline
                    rows={4}
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                
                <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                <TextField
                    required
                    id="filled-required"
                    label="Permanent Address"
                    variant="filled"
                    multiline
                    rows={4}
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, width: "90% !important" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={gender}
                      onChange={handlegenderChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Male</MenuItem>
                      <MenuItem value={20}>Female</MenuItem>
                      <MenuItem value={30}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    id="filled-required"
                    label="Facebook Profile"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Twitter Profile"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Experience"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Expertise"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Current Company"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Current Salary"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Designation"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Reason For Leaving"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Expected Salary"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Notice Period"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Skills"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Required Job "
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex", alignItems:"center"}}> 
                  <Typography variant="h6" sx={{ fontSize: "1em",px:3 }}>
                  Current Salary Slip / Offer Letter
                  </Typography>
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex", alignItems:"center"}}>
                  <Typography variant="h6" sx={{ fontSize: "1em",px:3 }}>
                  Passport Image
                  </Typography>
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex", alignItems:"center"}}>
                  <Typography variant="h6" sx={{ fontSize: "1em", px:3 }}>
                  Resume
                  </Typography>
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Grid>
                 <Grid md={6} mb={2} sx={{display:"flex",justifyContent:"center"}}></Grid>
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
