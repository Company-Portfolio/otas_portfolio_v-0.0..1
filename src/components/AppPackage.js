import { Grid } from "@mui/material";
import React from "react";

function AppPackage() {
  return (
    <Grid
      container
      className="subHeaderContainer"
      sx={{
        marginLeft: { xs: "20px", md: "100px" },
        display: { xs: "none", md: "flex" },
      }}
    >
      <Grid item xs={12} className="subHeader">
        <p className="text">App Development Package</p>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: { xs: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", paddingRight: "100px" }}>
          <div className="webPackageContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="180"
              viewBox="0 0 180 180"
              fill="none"
            >
              <path
                d="M37.5 157.5C33.375 157.5 29.8438 156.031 26.9062 153.094C23.9688 150.156 22.5 146.625 22.5 142.5V37.5C22.5 33.375 23.9688 29.8438 26.9062 26.9062C29.8438 23.9688 33.375 22.5 37.5 22.5H142.5C146.625 22.5 150.156 23.9688 153.094 26.9062C156.031 29.8438 157.5 33.375 157.5 37.5V142.5C157.5 146.625 156.031 150.156 153.094 153.094C150.156 156.031 146.625 157.5 142.5 157.5H37.5ZM37.5 142.5H142.5V37.5H37.5V142.5ZM45 127.5H135L106.875 90L84.375 120L67.5 97.5L45 127.5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", paddingRight: "100px" }}>
          <div className="webPackageContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="180"
              viewBox="0 0 180 180"
              fill="none"
            >
              <path
                d="M37.5 157.5C33.375 157.5 29.8438 156.031 26.9062 153.094C23.9688 150.156 22.5 146.625 22.5 142.5V37.5C22.5 33.375 23.9688 29.8438 26.9062 26.9062C29.8438 23.9688 33.375 22.5 37.5 22.5H142.5C146.625 22.5 150.156 23.9688 153.094 26.9062C156.031 29.8438 157.5 33.375 157.5 37.5V142.5C157.5 146.625 156.031 150.156 153.094 153.094C150.156 156.031 146.625 157.5 142.5 157.5H37.5ZM37.5 142.5H142.5V37.5H37.5V142.5ZM45 127.5H135L106.875 90L84.375 120L67.5 97.5L45 127.5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", paddingRight: "100px" }}>
          <div className="webPackageContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="180"
              viewBox="0 0 180 180"
              fill="none"
            >
              <path
                d="M37.5 157.5C33.375 157.5 29.8438 156.031 26.9062 153.094C23.9688 150.156 22.5 146.625 22.5 142.5V37.5C22.5 33.375 23.9688 29.8438 26.9062 26.9062C29.8438 23.9688 33.375 22.5 37.5 22.5H142.5C146.625 22.5 150.156 23.9688 153.094 26.9062C156.031 29.8438 157.5 33.375 157.5 37.5V142.5C157.5 146.625 156.031 150.156 153.094 153.094C150.156 156.031 146.625 157.5 142.5 157.5H37.5ZM37.5 142.5H142.5V37.5H37.5V142.5ZM45 127.5H135L106.875 90L84.375 120L67.5 97.5L45 127.5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default AppPackage;
