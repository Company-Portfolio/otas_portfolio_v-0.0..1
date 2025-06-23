import { Box, Button, Grid, Tooltip } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion"; // Importing Framer Motion components
import itfn from "./../../assets/image/clientLogo/client5.svg";
import KKK from "./../../assets/image/clientLogo/client2.svg";
import saw from "./../../assets/image/clientLogo/client4.svg";
import charming from "./../../assets/image/clientLogo/client6.svg";
import changan from "./../../assets/image/clientLogo/client11.svg";
import uedc from "./../../assets/image/clientLogo/uedc.png";
import livecode from "./../../assets/image/clientLogo/client9.svg";
import caremel from "./../../assets/image/clientLogo/client.svg";
import suzuki from "./../../assets/image/clientLogo/client3.svg";
import meg from "./../../assets/image/clientLogo/client10.svg";
import okGroupOfCompanies from "./../../assets/image/clientLogo/client7.svg";

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
        style={{ marginTop: "5rem" }}
      >
        Our Clients
      </motion.h1>
      <motion.p
        className="serviceContent"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ marginBottom: "5rem" }}
      >
        Our product development process ensures precision and quality, leading
        to a seamless transfer of superior products for your business.
      </motion.p>
      <Grid container spacing={2} style={{ justifyContent: "start" }}>
        {[
          {
            src: changan,
            alt: "Changan Auto Myanmar",
            tooltip: "Changan Auto Myanmar",
            link: "https://www.facebook.com/changanmyanmarmotor",
            title: (
              <span>
                Changan <br /> Myanmar
              </span>
            ),
          },
          {
            src: KKK,
            alt: "Kaung Kaday Kyawl Construction Company",
            tooltip: "Kaung Kaday Kyawl Construction Company",
            link: "https://www.facebook.com/kaungkadaykyawl",
            title: <span>Kaung Kaday Kyawl Construction</span>,
          },
          {
            src: suzuki,
            alt: "Suzuki Myanmar",
            tooltip: "Suzuki Myanmar",
            // link: "https://www.okgroupofcompanies.com/",
            title: (
              <span>
                Suzuki Myanmar 6 <br /> Car Showroom
              </span>
            ),
          },
          {
            src: saw,
            alt: "Digital Saw Social Media Agency",
            tooltip: "Digital Saw Social Media Agency",
            link: "https://www.facebook.com/digitalsaw9",
            title: (
              <span>
                Digital Saw <br /> Marketing Agency
              </span>
            ),
          },
          {
            src: itfn,
            alt: "International Focus Oversea Employment Agency",
            tooltip: "International Focus Oversea Employment Agency",
            link: "https://www.facebook.com/profile.php?id=100057098965784",
            title: (
              <span>
                International <br /> Focus
              </span>
            ),
          },
          {
            src: charming,
            alt: "Charming Bussiness Group",
            tooltip: "Charming Bussiness Group",
            // link: "https://www.charmingbusinessgroup.com/",
            title: (
              <span>
                Charming <br /> Business Group
              </span>
            ),
          },
          {
            src: okGroupOfCompanies,
            alt: "OK Group of Companies",
            tooltip: "OK Group of Companies",
            // link: "https://www.okgroupofcompanies.com/",
            title: (
              <span>
                OK Group of <br /> Companies
              </span>
            ),
          },

          {
            src: livecode,
            alt: "Live Code Myanmar",
            tooltip: "Live Code Myanmar",
            // link: "https://www.okgroupofcompanies.com/",
            title: (
              <span>
                Live Code <br /> Myanmar
              </span>
            ),
          },
          {
            src: caremel,
            alt: "Care Mel",
            tooltip: "Care Mel",
            // link: "https://www.okgroupofcompanies.com/",
            title: <span>Care Mel</span>,
          },
          {
            src: meg,
            alt: "Meg",
            tooltip: "Meg",
            // link: "https://www.okgroupofcompanies.com/",
            title: (
              <span>
                Medical <br /> Education Guild
              </span>
            ),
          },
          {
            src: uedc,
            alt: "UEDC",
            tooltip: "UEDC",
            // link: "https://www.okgroupofcompanies.com/",
            title: <span>UEDC Myanmar</span>,
          },
        ].map((client, index) => (
          <Grid
            item
            // lg={2.5}
            sx={{
              flexBasis: { xs: "50%", md: "30%", lg: "20%" }, // 100% / 5 items
              maxWidth: { xs: "50%", md: "30%", lg: "20%" },
            }}
            key={index}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  width: "150px",
                  height: "150px",
                  marginTop: "20px",
                  overflow: "hidden",
                  background: "transparent",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "all 0.3s ease",
                    background: "transparent",
                  },
                }}
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
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                style={{
                  marginTop: "10px",
                  color: "white",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
                className="inter"
              >
                {client.title}
              </motion.h3>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OurClient;
