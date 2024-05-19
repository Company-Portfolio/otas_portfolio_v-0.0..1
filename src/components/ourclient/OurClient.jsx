import { Box } from "@mui/material";
import React from "react";
import itfn from "./../../assets/image/internationalfocuslogo.jpg";
import KKK from "./../../assets/image/KKK.png";
import saw from "./../../assets/image/digitalsaw.png";
import Tooltip from "@mui/material/Tooltip";

function OurClient() {
  return (
    <div>
      <Box
        className="serviceContainer"
        id="Client"
        sx={{ paddingBottom: "1px" }}
      >
        <h1 className="serviceHeader">Our Clients</h1>
        <p className="serviceContent">
          We are proud to collaborate with a diverse range of clients, from
          innovative startups to established.
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
          <Tooltip
            title="International Focus Oversea Employment Agency"
            placement="right-start"
          >
            <Box
              sx={{
                width: { xs: "150px", md: "100px", lg: "150px" },
                marginTop: "20px",
                borderRadius: "10px",
                overflow: "hiddan",
              }}
            >
              <img
                src={itfn}
                style={{
                  width: "inherit",
                  height: "inherit",
                  borderRadius: "10px",
                }}
                alt="clinet-logo"
              />
            </Box>
          </Tooltip>

          <Tooltip
            title="Digital Saw Social Media Agency"
            placement="right-start"
          >
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
          </Tooltip>

          <Tooltip
            title="Kaung Kaday Kyawl Construction Company"
            placement="right-start"
          >
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
          </Tooltip>
        </Box>
      </Box>
    </div>
  );
}

export default OurClient;
