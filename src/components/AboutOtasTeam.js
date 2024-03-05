import React from "react";
import { Grid } from "@mui/material";
import picture2 from "./../assets/img/picture2.jpg";
import picture3 from "./../assets/img/picture3.jpg";
import picture4 from "./../assets/img/picture4.jpg";
import picture5 from "./../assets/img/picture5.png";

function AboutOtasTeam() {
  return (
    <Grid
      container
      className="subHeaderContainer"
      sx={{
        marginTop: { xs: "0", md: "100px" },
        marginBottom: { xs: "50px", md: "100px" },
      }}
    >
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="pictureContainer">
          <img src={picture2} alt="card" className="picture2" />
          <img src={picture3} alt="card" className="picture3" />
          <img src={picture4} alt="card" className="picture4" />
          <img src={picture5} alt="card" className="picture5" />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{ marginLeft: { xs: "20px", md: "0" } }}
        className="subHeader"
      >
        <span className="text">
          Guided by a commitment to innovation, integrity,
          <br /> and client-centricity, we embrace a culture that
          <br /> values collaboration, continuous learning, and
          <br /> responsibility. Our team thrives on adaptability,
          <br /> empathy, and a dedication to delivering
          <br /> excellence in all aspects of our work. With
          <br /> transparency, a focus on quality, and a belief in
          <br />
          social responsibility, we strive to create an
          <br /> environment that is not only productive but also
          <br /> enjoyable, fostering a sense of fulfillment and
          <br /> shared success.
        </span>
      </Grid>
    </Grid>
  );
}

export default AboutOtasTeam;
