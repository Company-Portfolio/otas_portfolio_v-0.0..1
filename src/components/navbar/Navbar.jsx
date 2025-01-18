import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "./../../assets/logo.png";

import "./../navbar/navbar.css";
import { Link } from "react-scroll";

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "left", paddingLeft: "20px" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        OTAS Tech Solutions
      </Typography>
      <Divider />
      <List>
        <Link
          // activeClass="active"
          to="Aboutus"
          spy={false}
          smooth={true}
          offset={0}
          duration={1000}
          className="nav-links"
          onClick={handleDrawerToggle}
        >
          Aboutus
        </Link>

        <Link
          // activeClass="active"
          to="Services"
          spy={false}
          smooth={true}
          offset={0}
          duration={1000}
          className="nav-links"
          onClick={handleDrawerToggle}
        >
          Services
        </Link>

        <Link
          to="Development Process"
          spy={false}
          smooth={true}
          offset={50}
          duration={1000}
          className="nav-links"
          onClick={handleDrawerToggle}
        >
          Development Process
        </Link>

        <Link
          to="FAQ"
          spy={false}
          smooth={true}
          offset={50}
          duration={1000}
          className="nav-links"
          onClick={handleDrawerToggle}
        >
          FAQ
        </Link>

        <Link
          to="Contact"
          spy={false}
          smooth={true}
          offset={0}
          duration={1000}
          className="nav-links"
          onClick={handleDrawerToggle}
        >
          Contact
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", background: "red" }}>
      {/* <CssBaseline /> */}
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#222222",
          margin: "0",
          boxShadow: "none",
          paddingX: { xs: "0", sm: "60px" },
          paddingY: "0",
        }}
      >
        <Toolbar>
          <Link
            to="heroBanner"
            spy={false}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: "100px",
                // backgroundColor: "red",
                height: "90px",
                marginTop: "10px",
              }}
            />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: { xs: "right", md: "left" },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Link
              // activeClass="active"
              to="Aboutus"
              spy={false}
              smooth={true}
              offset={0}
              duration={1000}
              className="nav-link"
            >
              About Us
            </Link>

            <Link
              activeClass="active"
              to="Services"
              spy={false}
              smooth={true}
              offset={0}
              duration={1000}
              className="nav-link"
            >
              Services
            </Link>

            <Link
              to="Development Process"
              spy={false}
              smooth={true}
              offset={50}
              duration={1000}
              className="nav-link"
            >
              Development Process
            </Link>

            <Link
              to="Client"
              spy={false}
              smooth={true}
              offset={0}
              duration={1000}
              className="nav-link"
            >
              Our Client
            </Link>

            <Link
              to="FAQ"
              spy={false}
              smooth={true}
              offset={50}
              duration={1000}
              className="nav-link"
            >
              FAQ
            </Link>

            <Link
              to="Contact"
              spy={false}
              smooth={true}
              offset={0}
              duration={1000}
              className="nav-link"
            >
              Contact
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="right"
          // role="presentation"
          //  open={state[anchor]}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
