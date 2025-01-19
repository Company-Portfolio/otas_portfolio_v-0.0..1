import { Box, Button, Grid, Tooltip } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion"; // Importing Framer Motion components
import itfn from "./../../assets/image/internationalfocuslogo.jpg";
import KKK from "./../../assets/image/KKK.png";
import saw from "./../../assets/image/digitalsaw.png";
import charming from "./../../assets/image/changmin.webp";
import changan from "./../../assets/image/clientLogo/changan-new-logo.png";
import livecode from "./../../assets/image/livecode.png";
import caremel from "./../../assets/image/clientLogo/logo.png";
import meme from "./../../assets/image/clientLogo/mem.jpg";

function OurClient() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 20 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <Box
      className="serviceContainer"
      id="Client"
      sx={{ paddingBottom: "1px" }}
      ref={ref}
    >
      <motion.h1
        className="serviceHeader"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        Our Clients
      </motion.h1>
      <motion.p
        className="serviceContent"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We are proud to collaborate with a diverse range of clients, from
        innovative startups to established companies.
      </motion.p>
      <Grid container spacing={2}>
        {[
          {
            src: changan,
            alt: "Changan Auto Myanmar",
            tooltip: "Changan Auto Myanmar",
            link: "https://www.facebook.com/changanmyanmarmotor",
          },
          {
            src: itfn,
            alt: "International Focus Oversea Employment Agency",
            tooltip: "International Focus Oversea Employment Agency",
            link: "https://www.facebook.com/profile.php?id=100057098965784",
          },
          {
            src: saw,
            alt: "Digital Saw Social Media Agency",
            tooltip: "Digital Saw Social Media Agency",
            link: "https://www.facebook.com/digitalsaw9",
          },
          {
            src: KKK,
            alt: "Kaung Kaday Kyawl Construction Company",
            tooltip: "Kaung Kaday Kyawl Construction Company",
            link: "https://www.facebook.com/kaungkadaykyawl",
          },

          {
            src: charming,
            alt: "Charming Bussiness Group",
            tooltip: "Charming Bussiness Group",
            link: "https://www.charmingbusinessgroup.com/",
          },
        ].map((client, index) => (
          <Grid
            item
            xs={6}
            md={3}
            lg={2}
            sx={{ display: "flex", justifyContent: "center" }}
            key={index}
          >
            <Tooltip title={client.tooltip} placement="right-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Button
                  sx={{
                    width: "150px",
                    height: "150px",
                    marginTop: "20px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "black",
                    "&:hover": {
                      scale: 1.1,
                    },
                  }}
                  href={client.link}
                  target="_blank"
                >
                  <img
                    src={client.src}
                    style={{
                      width: "inherit",
                      height: "inherit",
                      borderRadius: "10px",
                    }}
                    alt={client.alt}
                  />
                </Button>
              </motion.div>
            </Tooltip>
          </Grid>
        ))}
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Tooltip title="Care Mel" placement="right-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.2 + 5 * 0.1 }}
            >
              <Button
                sx={{
                  width: "150px",
                  height: "150px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  background: "white",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                href="https://www.facebook.com/caremel122023?mibextid=ZbWKwL"
                target="_blank"
              >
                <img
                  src={caremel}
                  style={{
                    width: "100px",
                    // height: "inherit",
                    borderRadius: "10px",
                    // backgroundColor: "white",
                  }}
                  alt="Caremel"
                />
              </Button>
            </motion.div>
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Tooltip title="Live Code Myanmar" placement="right-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.2 + 5 * 0.1 }}
            >
              <Button
                sx={{
                  width: "150px",
                  height: "150px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  background: "white",
                  "&:hover": {
                    scale: 1.1,
                  },
                }}
                href="https://www.facebook.com/livecodemyanmar"
                target="_blank"
              >
                <img
                  src={livecode}
                  style={{
                    width: "inherit",
                    // height: "inherit",
                    borderRadius: "10px",
                    // backgroundColor: "white",
                  }}
                  alt="Live Code Myanmar"
                />
              </Button>
            </motion.div>
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Tooltip title="MeMe Cosmetics" placement="right-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.2 + 5 * 0.1 }}
            >
              <Button
                sx={{
                  width: "150px",
                  height: "150px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  background: "white",
                  "&:hover": {
                    scale: 1.1,
                  },
                }}
                href="https://www.facebook.com/photo/?fbid=241537781841893&set=a.182462111082794"
                target="_blank"
              >
                <img
                  src={meme}
                  style={{
                    width: "inherit",
                    // height: "inherit",
                    borderRadius: "10px",
                    // backgroundColor: "white",
                  }}
                  alt="meme"
                />
              </Button>
            </motion.div>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OurClient;
