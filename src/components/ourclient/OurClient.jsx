import { Box, Button, Grid } from "@mui/material";
import React from "react";
import itfn from "./../../assets/image/internationalfocuslogo.jpg";
import KKK from "./../../assets/image/KKK.png";
import saw from "./../../assets/image/digitalsaw.png";
import charming from "./../../assets/image/changmin.webp";
import changan from "./../../assets/image/changan.png";
import livecode from "./../../assets/image/livecode.png";
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
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            md={3}
            lg={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Tooltip
              title="International Focus Oversea Employment Agency"
              placement="right-start"
            >
              <Button
                sx={{
                  width: "150px",
                  height: "150px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  overflow: "hiddan",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                className="clientLogo"
                href="https://www.facebook.com/profile.php?id=100057098965784"
                target="_blank"
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
              </Button>
            </Tooltip>
          </Grid>

          <Grid
            item
            xs={6}
            md={3}
            lg={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Tooltip
              title="Digital Saw Social Media Agency"
              placement="right-start"
            >
              <Button
                sx={{
                  width: "150px",
                  height: "150px",
                  marginTop: "20px",
                }}
                href="https://www.facebook.com/digitalsaw9"
                target="_blank"
              >
                <img
                  src={saw}
                  style={{ width: "inherit", height: "inherit" }}
                  alt="clinet-logo"
                />
              </Button>
            </Tooltip>
          </Grid>

          <Grid
            item
            xs={6}
            md={3}
            lg={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Tooltip
              title="Kaung Kaday Kyawl Construction Company"
              placement="right-start"
            >
              <Button
                sx={{
                  width: "150px",
                  height: "150px",
                  marginTop: "20px",
                }}
                href="https://www.facebook.com/kaungkadaykyawl"
                target="_blank"
              >
                <img
                  src={KKK}
                  style={{ width: "inherit", height: "inherit" }}
                  alt="clinet-logo"
                />
              </Button>
            </Tooltip>
          </Grid>

          <Grid
            item
            xs={6}
            md={3}
            lg={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Tooltip title="Changan Auto Myanmar" placement="right-start">
              <Button
                sx={{
                  width: "150px",
                  height: "150px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  background: "white",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                href="https://www.facebook.com/livecodemyanmar"
                target="_blank"
              >
                <img
                  src={livecode}
                  style={{
                    width: "inherit",
                    borderRadius: "10px",
                  }}
                  alt="clinet-logo"
                />
              </Button>
            </Tooltip>
          </Grid>

          <Grid
            item
            xs={6}
            md={3}
            lg={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Tooltip title="Charming Bussiness Group" placement="right-start">
              <Button
                sx={{
                  width: "150px",
                  height: "150px",
                  marginTop: "20px",
                  background: "white",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                href="https://www.charmingbusinessgroup.com/"
                target="_blank"
              >
                <img
                  src={charming}
                  style={{ width: "inherit", height: "inherit" }}
                  alt="clinet-logo"
                />
              </Button>
            </Tooltip>
          </Grid>

          <Grid
            item
            xs={6}
            md={3}
            lg={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Tooltip title="Changan Auto Myanmar" placement="right-start">
              <Button
                sx={{
                  width: "150px",
                  height: "150px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  overflow: "hiddan",
                  background: "red",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                href="https://www.facebook.com/changanmyanmarmotor"
                target="_blank"
              >
                <img
                  src={changan}
                  style={{
                    width: "inherit",
                    height: "inherit",
                    borderRadius: "10px",
                  }}
                  alt="clinet-logo"
                />
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default OurClient;
