import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  import "../components/_Navbar.scss"
  
  const Navbar = () => {
    return (
      <>
      <div className="navbar">
        <div className="container">
        <div>
            <img src="https://preview.colorlib.com/theme/robotics/img/logo.png.webp" alt="" />
        </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>SERVICES</li>
        <li>PRODUCTS</li>
        <li>BLOG</li>
        <li>CONTACT</li>
        <li>DROPDOWN</li>
      </ul>
        </div>
      </div>
      </>
    );
  };
  
  export default Navbar;
        // <Box sx={{ flexGrow: 1 }}>
        // <AppBar position="static" >
        // <div className="content">
        //     <Toolbar>
        //       <IconButton
        //         size="large"
        //         edge="start"
        //         color="inherit"
        //         aria-label="menu"
        //         sx={{ mr: 2 }}
        //       ></IconButton>
        //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //         Robotics
        //       </Typography>
        //       <Button style={{marginRight:'10px'}} variant="text" color="error"><Link style={{textDecoration:'none',color:'white'}} to='/'>Home</Link></Button>
        //       <Button variant="text" color="error"><Link style={{textDecoration:'none',color:'white'}} to='/add-artist'>Add Robots</Link></Button>
        //     </Toolbar>
        // </div>
        //   </AppBar>
        // </Box>