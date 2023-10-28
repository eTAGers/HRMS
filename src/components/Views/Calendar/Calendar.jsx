import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useState } from "react";
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const localizer = momentLocalizer(moment);
const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Event name:");
    if (title) {
      const newEvent = {
        start,
        end,
        title,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <>
      <Grid container>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <RouterLink to={"/"}>Home</RouterLink>
              <RouterLink to={"/Calendar"}>Calendar</RouterLink>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid rows ml={"3.8rem"} mt={4}sx={{width:"90%"}}>
          <Grid md={12} sx={{width:"100%",height:"70vh"}}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              onSelectSlot={handleSelect}
              selectable
              sx={{width:"100%",height:"80vh"}}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MyCalendar;
