import { Box, Grid, Typography } from "@mui/material";
import React from "react";
export default function Footer(){
    const getYear = new Date().getFullYear();
    return(
        <>
        {/* <Box sx={{ display: "flex",p:2,justifyContent:"center" }}>
        <Grid container >
            <Grid item sm={12} md={12}>
                <Typography sx={{fontSize:"14px",textAlign:"center",color:"#000"}}> 
                    &copy;{getYear} eTAGers, All rights Reserved.
                </Typography>
            </Grid>
            
        </Grid></Box> */}
        <footer className="main-footer">
            <div className="footer-left">
                   &copy;{getYear} <a href="#">eTAGers</a>, All rights Reserved.
            </div>
            <div className="footer-right">
            
            </div>
        </footer>
        </>
    )
}