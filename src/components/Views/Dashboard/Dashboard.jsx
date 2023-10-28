import * as React from "react";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from '@mui/x-charts/PieChart';
export default function Dashboard() {
  return (
    <>
      <Grid
        container
        spacing={3}
        my={2}
        px={5}
        sx={{ justifyContent: "center" }}
      >
        <Grid item sm={12} md={3}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "0 0 7px 0px rgba(0,0,0,0.14)" }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <div
                style={{
                  backgroundColor: "#1976d2",
                  width: "55px",
                  height: "55px",
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "1em 0",
                  alignItems: "center",
                }}
              >
                <PeopleOutlineRoundedIcon sx={{ color: "#fff" }} />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold " }}
              >
                1200
              </Typography>

              <Typography gutterBottom variant="h6" component="div">
                Total Employee
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} md={3}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "0 0 7px 0px rgba(0,0,0,0.14)" }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <div
                style={{
                  backgroundColor: "#1976d2",
                  width: "55px",
                  height: "55px",
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "1em 0",
                  alignItems: "center",
                }}
              >
                <PeopleOutlineRoundedIcon sx={{ color: "#fff" }} />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold " }}
              >
                1200
              </Typography>

              <Typography gutterBottom variant="h6" component="div">
                Total Employee
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} md={3}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "0 0 7px 0px rgba(0,0,0,0.14)" }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <div
                style={{
                  backgroundColor: "#1976d2",
                  width: "55px",
                  height: "55px",
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "1em 0",
                  alignItems: "center",
                }}
              >
                <PeopleOutlineRoundedIcon sx={{ color: "#fff" }} />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold " }}
              >
                1200
              </Typography>

              <Typography gutterBottom variant="h6" component="div">
                Total Employee
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} md={3}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "0 0 7px 0px rgba(0,0,0,0.14)" }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <div
                style={{
                  backgroundColor: "#1976d2",
                  width: "55px",
                  height: "55px",
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "1em 0",
                  alignItems: "center",
                }}
              >
                <PeopleOutlineRoundedIcon sx={{ color: "#fff" }} />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold " }}
              >
                1200
              </Typography>

              <Typography gutterBottom variant="h6" component="div">
                Total Employee
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        my={2}
        px={5}
        sx={{ justifyContent: "center" }}
      >
        <Grid item sm={12} md={6}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "0 0 7px 0px rgba(0,0,0,0.14)" }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
                <Box>
                    
                <Typography variant="h5">
                    Pie Chart
                </Typography>
                </Box>
               <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      height={250}
    />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} md={6}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "0 0 7px 0px rgba(0,0,0,0.14)" }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
            <Box>
                <Typography variant="h5">
                    Bar Chart
                </Typography>
              </Box>
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["group A", "group B", "group C"],
                  },
                ]}
                series={[
                  { data: [4, 3, 5] },
                  { data: [1, 6, 3] },
                  { data: [2, 5, 6] },
                ]}
                sx={{display:"flex",justifyContent:"center"}}
                height={250}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
