import React from "react";
import { Box, Grid, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import aao from "./../assets/image/employee/aao.jpg";
import tso from "./../assets/image/employee/tso.jpg";
import wint from "./../assets/image/employee/wnt.jpg";
import hso from "./../assets/image/employee/hso.jpg";
import how from "./../assets/image/employee/how.jpg";
import atyh from "./../assets/image/employee/atyh.jpg";
import hha from "./../assets/image/employee/hha.jpg";

import "./EmployeeDetail.css";
import { useParams } from "react-router-dom";

const employeeArray = [
  {
    id: 1,
    name: "Thant Sin Oo",
    position: "CEO",
    photo: tso,
    start: "Sep 2023",
    email: "thantsinoo@otastechsolutions.com",
    phone: "+959 951207795",
    staus: "active",
    office: "Yangon",
  },
  {
    id: 2,
    name: "Aung Aung Oo",
    position: "Software Engineer",
    photo: aao,
    start: "Sep 2023",
    email: "aungaungoo@otastechsolutions.com",
    phone: "+959 798183790",
    staus: "active",
    office: "Yangon",
  },
  {
    id: 3,
    name: "Wint Thandar Moe",
    position: "HR & Finance Manager",
    photo: wint,
    start: "Sep 2023",
    email: "wintt@otastechsolutions.com",
    phone: "+959 798936649",
    staus: "active",
    office: "Yangon",
  },
  {
    id: 4,
    name: "Aung Thuyein Hein",
    position: "Software Engineer",
    photo: atyh,
    start: "Sep 2023",
    email: "blackcoffin@otastechsolutions.com",
    phone: "+959 798183790",
    staus: "active",
    office: "Yangon",
  },
  {
    id: 5,
    name: "Htet Oo Wai Yan",
    position: "Senior UI/UX Designer",
    photo: how,
    start: "Dec 2023",
    email: "htetoo@otastechsolutions.com",
    phone: "+959 783742007",
    staus: "active",
    office: "Yangon",
  },
  {
    id: 6,
    name: "Htet Shine Oo",
    position: "Internship UI/UX Designer",
    photo: hso,
    start: "May 2024",
    email: "htetshineoo@otastechsolutions.com",
    phone: "+959 979758614",
    staus: "active",
    office: "Yangon",
  },
  {
    id: 7,
    name: "Hein Htet Aung",
    position: "CMO",
    photo: hha,
    start: "Jan 2024",
    email: "kriz@otastechsolutions.com",
    phone: "+959 970577147",
    staus: "active",
    office: "Yangon",
  },
  {
    id: 8,
    name: "Thurein Htun",
    position: "Software Engineer",
    start: "Mar 2024",
    // photo: aao,
    email: "thurein@otastechsolutions.com",
    phone: "+659 154711211",
    staus: "active",
    office: "Thai",
  },
];

const AboutMeSection = () => {
  const { id } = useParams();
  console.log(id);

  const employee = employeeArray.find((emp) => emp.id === Number(id));
  console.log(employee);

  return (
    <div className="employee-detail-container">
      <Grid container>
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{
                backgroundColor: "#222222",
                color: "white",
                padding: 3,
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <p className="employee-header" style={{ padding: 0 }}>
                OTAS <br /> Tech Solutions
              </p>
              <span className="employee-description">
                We Create Digital Products For Your Bussiness
              </span>
              <Avatar
                src={
                  employee?.photo ||
                  "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1384797116.1722938728&semt=ais_hybrid"
                }
                alt="Profile Picture"
                sx={{
                  width: 300,
                  height: 300,
                  // marginTop: 3,
                  backgroundColor: "white",
                  margin: "30px auto",
                }}
              />
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{
                backgroundColor: "#0077ff",
                padding: 3,
                textAlign: "left",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p className="employee-header">Employee Details</p>
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: 3,
                  borderRadius: "8px",
                  border: "1px solid white",
                  padding: "20px",
                }}
              >
                <Grid item xs={12}>
                  <div className="employee-input">
                    <p className="employee-detail-text" style={{ margin: 0 }}>
                      Name
                    </p>
                    <span className="employee-detail-text">
                      {employee.name}
                    </span>
                  </div>
                </Grid>

                <Grid item xs={12} md={6}>
                  <div className="employee-input">
                    <p className="employee-detail-text" style={{ margin: 0 }}>
                      Position
                    </p>
                    <span className="employee-detail-text">
                      {employee.position}
                    </span>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="employee-input">
                    <p className="employee-detail-text" style={{ margin: 0 }}>
                      Email
                    </p>
                    <span className="employee-detail-text">
                      {employee.email}
                    </span>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="employee-input">
                    <p className="employee-detail-text" style={{ margin: 0 }}>
                      Phone
                    </p>
                    <span className="employee-detail-text">
                      {employee.phone}
                    </span>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="employee-input">
                    <p className="employee-detail-text" style={{ margin: 0 }}>
                      Admission Date
                    </p>
                    <span className="employee-detail-text">
                      {employee.start}
                    </span>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="employee-input">
                    <p className="employee-detail-text" style={{ margin: 0 }}>
                      Status
                    </p>
                    <span className="employee-detail-text">
                      {employee.staus}
                    </span>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="employee-input">
                    <p className="employee-detail-text" style={{ margin: 0 }}>
                      Office
                    </p>
                    <span className="employee-detail-text">
                      {employee.office}
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMeSection;
