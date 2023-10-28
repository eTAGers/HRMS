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
import SendIcon from '@mui/icons-material/Send';
import 'react-quill/dist/quill.snow.css'; // Import styles

export default function Createquestions() {
  const [answer, setAnswer] = React.useState("");
  const handledAnswerChange = (event) => {
    setAnswer(event.target.value);
  };
  const [assessment, setAssessment] = React.useState("");
  const handledAssessmentChange = (event) => {
    setAssessment(event.target.value);
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
                 to={"/Createquestions"}
              >
               Questions
              </RouterLink>
              <Typography color="text.primary">Create Questions</Typography>
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
            <Typography variant="h5">Create Questions</Typography>
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
                <FormControl
                    variant="filled"
                    sx={{ m: 1, width: "90% !important" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                    Select Assessment 
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={assessment}
                      onChange={handledAssessmentChange}
                    >
                      <MenuItem value={1}>Apptitute</MenuItem>
                      <MenuItem value={2}>Experience Interview</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                 <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    required
                    id="filled-required"
                    label="Question"
                    variant="filled"
                    sx={{ width: "90% !important" }}
                  />
                </Grid>

                 <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                 <TextField
                    required
                    id="filled-required"
                    label="Option 1"
                    variant="filled"
                    multiline
                    rows={4}
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                 
                <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                <TextField
                    required
                    id="filled-required"
                    label="Option 2"
                    variant="filled"
                    multiline
                    rows={4}
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                <TextField
                    required
                    id="filled-required"
                    label="Option 3"
                    variant="filled"
                    multiline
                    rows={4}
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                <TextField
                    required
                    id="filled-required"
                    label="Option 4"
                    variant="filled"
                    multiline
                    rows={4}
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                <TextField
                    required
                    id="filled-required"
                    label="Option 5"
                    variant="filled"
                    multiline
                    rows={4}
                    sx={{ width: "90% !important" }}
                  />
                </Grid>
                <Grid md={12} mb={2} sx={{display:"flex",justifyContent:"center"}}>
                <FormControl
                    variant="filled"
                    sx={{ m: 1, width: "90% !important" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                    Select Answer
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={answer}
                      onChange={handledAnswerChange}
                    >
                      <MenuItem value={1}>Option 1</MenuItem>
                      <MenuItem value={2}>Option 2</MenuItem>
                      <MenuItem value={3}>Option 3</MenuItem>
                      <MenuItem value={4}>Option 4</MenuItem>
                      <MenuItem value={5}>Option 5</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container md={12}>
                <Grid rows  md={12} mt={3} sx={{display:"flex",justifyContent:"center"}}>
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
