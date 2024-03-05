import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Menu, MenuItem } from "@mui/material";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { NavLink } from "react-router-dom";
import logo from "./../assets/img/logoWhite.png";
import { motion } from "framer-motion";

import "./../style/navbar.css";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window, scrollToTop } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left" }}>
      <Typography variant="h6" sx={{ m: 2 }}>
        OTAS Tech Solution
      </Typography>
      <Divider />
      <Box sx={{ display: { xs: "block", sm: "none" }, marginTop: "20px" }}>
        <NavLink to="/" className="navs">
          Home
        </NavLink>
        <NavLink to="/about" className="navs">
          About
        </NavLink>

        <a href="tel:09754007485" className="tel">
          09 75 4007 485
        </a>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ display: "flex" }}
      component={motion.div}
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: "tween" }}
    >
      {/* <CssBaseline /> */}
      <AppBar
        component="nav"
        className="navbar"
        sx={{ backgroundColor: "#000" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src={logo} alt="logo" className="logo" />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavLink to="/" className="nav" onClick={scrollToTop}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav" onClick={scrollToTop}>
              About
            </NavLink>
          </Box>
          <Box sx={{ flexGrow: { xs: 1, md: 0 }, textAlign: "right" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <span className="nav">Service</span>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <NavLink
                  to="/service/web"
                  className="navs"
                  onClick={scrollToTop}
                >
                  Web Development
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink
                  to="/service/app"
                  className="navs"
                  onClick={scrollToTop}
                >
                  App Development
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink
                  to="/service/free"
                  className="navs"
                  onClick={scrollToTop}
                >
                  Free Consulting
                </NavLink>
              </MenuItem>
            </Menu>
            <a
              href="tel:09754007485"
              className="tel"
              style={{ marginLeft: "10px" }}
            >
              09 75 4007 485
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ pt: 4 }}></Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
