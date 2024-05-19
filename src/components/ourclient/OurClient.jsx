import { Box } from "@mui/material";
import React from "react";
import itfn from "./../../assets/image/internationalfocuslogo.jpg";
import KKK from "./../../assets/image/KKK.png";
import saw from "./../../assets/image/digitalsaw.png";

function OurClient() {
  return (
    <div>
      <Box
        className="serviceContainer"
        id="Services"
        sx={{ paddingBottom: "1px" }}
      >
        <h1 className="serviceHeader">Our Clients</h1>
        <p className="serviceContent">
          Our product development process ensures precision and quality, leading
          to a seamless transfer of superior products for your business.
        </p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <Box
            sx={{
              width: { xs: "150px", md: "100px", lg: "150px" },
              marginTop: "20px",
            }}
          >
            <img
              src={itfn}
              style={{ width: "inherit", height: "inherit" }}
              alt="clinet-logo"
            />
          </Box>

          <Box
            sx={{
              width: { xs: "150px", md: "100px", lg: "150px" },
              marginTop: "20px",
            }}
          >
            <img
              src={saw}
              style={{ width: "inherit", height: "inherit" }}
              alt="clinet-logo"
            />
          </Box>

          <Box
            sx={{
              width: { xs: "150px", md: "100px", lg: "150px" },
              marginTop: "20px",
            }}
          >
            <img
              src={KKK}
              style={{ width: "inherit", height: "inherit" }}
              alt="clinet-logo"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default OurClient;
