import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import image1 from "./../assets/img/image1.png";
import image2 from "./../assets/img/image2.png";
import image3 from "./../assets/img/image3.png";
import image4 from "./../assets/img/image4.png";
import image5 from "./../assets/img/image5.png";
import whril from "./../assets/img/Whirl.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./../style/homepage.css";

function HowBuildProduct() {
  const [clickCount, setClickCount] = useState(0);

  function forwardClick() {
    // Increment the click count
    if (clickCount < 4) {
      const newClickCount = clickCount + 1;
      setClickCount(newClickCount);
    } else {
      setClickCount(0);
    }
  }

  function backwardClick() {
    // Increment the click count
    if (clickCount === 0) {
      setClickCount(4);
    } else {
      const newClickCount = clickCount - 1;
      setClickCount(newClickCount);
    }
  }

  console.log(clickCount);
  return (
    <Grid
      container
      sx={{ marginTop: "100px", marginX: { xs: "10px", md: "0" } }}
    >
      <Grid
        item
        xs={12}
        className="serviceHeader"
        sx={{ textAlign: "center", marginBottom: "100px" }}
      >
        <p className="text">How We Built The Product</p>
        <span className="text">
          This process ensures precision and quality,
          <br /> leading to a seamless transfer of superior
          <br /> products for your business.
        </span>
      </Grid>
      {/* -------------------------------------------------------------------------------_ */}
      <Grid container>
        <Grid
          item
          xs={1}
          sx={{ marginY: "auto", display: { xs: "none", md: "block" } }}
        >
          <Button onClick={backwardClick}>
            <ArrowBackIosIcon sx={{ color: "white", fontSize: "100px" }} />
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="imageContainer">
            <div className="one">
              <img src={image1} alt="gather" />
            </div>
            <div className="two">
              <img src={image2} alt="gather" />
            </div>
            <div className="three">
              <img src={image3} alt="gather" />
            </div>
            <div className="four">
              <img src={image4} alt="gather" />
            </div>
            <div className="five">
              <img src={image5} alt="gather" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
          <div className="courselContainer">
            <div className="courselbackground">
              <img src={whril} alt="whril" />
            </div>
            <div className="coursel">
              {clickCount === 0 ? (
                <div className="coursel-item">
                  <p>Gather Information</p>

                  <span>
                    We develope deep into understanding your needs, market
                    trends, and user insights to lay a robust foundation for the
                    development process.
                  </span>
                  <img src={image1} alt="gather" />
                  <button>Connect With us</button>
                </div>
              ) : null}

              {clickCount === 1 ? (
                <div className="coursel-item">
                  <p>Design</p>

                  <span>
                    We meticulously craft intuitive and innovative designs that
                    align with your vision and user needs, ensuring the
                    foundation for a compelling product.
                  </span>
                  <img src={image2} alt="gather" />
                  <button>Connect With us</button>
                </div>
              ) : null}

              {clickCount === 2 ? (
                <div className="coursel-item">
                  <p>Develop</p>

                  <span>
                    Our dedicated team members cutting-edge technologies and
                    precise engineering to transform designs into functional,
                    high-quality products, ensuring robustness and scalability
                    at every step.
                  </span>
                  <img src={image3} alt="gather" />
                  <button>Connect With us</button>
                </div>
              ) : null}

              {clickCount === 3 ? (
                <div className="coursel-item">
                  <p>Testing</p>

                  <span>
                    We employ meticulous evaluations to guarantee flawless
                    functionality, reliability, and optimal performance,
                    ensuring that every product meets the highest standards
                    before deployment.
                  </span>
                  <img src={image4} alt="gather" />
                  <button>Connect With us</button>
                </div>
              ) : null}

              {clickCount === 4 ? (
                <div className="coursel-item">
                  <p>Transfer</p>

                  <span>
                    With precision and care, we ensure the smooth transition of
                    the finished product, ready to empower your business
                    operations with its innovative capabilities.
                  </span>
                  <img src={image5} alt="gather" />
                  <button>Connect With us</button>
                </div>
              ) : null}
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{ marginY: "auto", display: { xs: "none", md: "block" } }}
        >
          <Button onClick={forwardClick}>
            <ArrowForwardIosIcon sx={{ color: "white", fontSize: "100px" }} />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HowBuildProduct;
