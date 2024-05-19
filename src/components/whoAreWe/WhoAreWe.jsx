import { Box, Grid } from "@mui/material";
import React from "react";
import whoarewe from "./../../assets/image/otasmember.jpeg";
import poly2 from "./../../assets/image/Polygon2.png";
import mission from "./../../assets/image/mission.png";
import missionPhoto from "./../../assets/image/missionPhoto.png";
import vision from "./../../assets/image/vission.png";

import "./whoarewe.css";

function WhoAreWe() {
  return (
    <Box className="whocontainer" id="Aboutus">
      <h1 className="whoheader">About Our Company</h1>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Box className="whoimage" sx={{ width: "100%", overflow: "hidden" }}>
            <img src={whoarewe} alt="whoarewe" style={{ width: "inherit" }} />
          </Box>
        </Grid>
        <Grid item>
          <p className="whocontent">
            OTAS Co.,Ltd. was established in 2021. We started as a group of
            fresh graduate and self-taught programmers but managed to build a
            team that is now powerful enough to develop effective and efficient
            IT products and provide client-tailored services. We have completed
            a number of both outsourced and in-house projects during the past 2
            years. Big and Small. Easy and Complex. We are never afraid to fail
            if this will lead us to learn something new and expand our
            professional and personal horizons.
          </p>
        </Grid>
        <Grid item xs={12} md={6} sx={{ marginTop: "50px" }}>
          <h3 className="title">
            <img src={mission} alt="mission" />
            <span className="mission">Our Mission</span>
          </h3>
          <p className="whocontent">
            Empower through Innovation: to empower businesses through innovative
            solutions. We strive to break new ground, leveraging cutting-edge
            technologies to propel our clients towards success and
            transformation.
          </p>
          {/* <Box className="missionPhotoContainer">
            <Box
              className="missionbackground"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <img src={poly2} alt="two" />
            </Box>
            <img
              src={missionPhoto}
              alt="missionPhoto"
              className="missionPhoto"
            />
          </Box> */}
        </Grid>
        <Grid item xs={12} md={6} sx={{ marginTop: "50px" }}>
          <h3 className="title">
            <img src={vision} alt="vision" />
            <span className="mission">Our Vision</span>
          </h3>
          <p className="whocontent">
            Pioneering a Digital Revolution, to be pioneers in the digital
            landscape, leading a revolution that transforms industries and
            redefines the way businesses operate and connect with their
            audiences.
          </p>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WhoAreWe;
