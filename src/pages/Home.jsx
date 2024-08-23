import React from "react";
import Navbar from "./../components/navbar/Navbar";
import HeroBanner from "./../components/herobanner/HeroBanner";
import WhoAreWe from "./../components/whoAreWe/WhoAreWe";
import ServiceWeProvide from "./../components/serviceWeProvide/ServiceWeProvide";
import DevProcess from "./../components/developmentProcess/DevProcess";
import FaqSection from "./../components/faq/FaqSection";
import Footer from "./../components/footer/Footer";
import OurClient from "./../components/ourclient/OurClient";

function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <WhoAreWe />
      <ServiceWeProvide />
      <DevProcess />
      <OurClient />
      <FaqSection />
      <Footer />
    </>
  );
}

export default Home;
