import { Box } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import HeroBanner from "./components/herobanner/HeroBanner";
import WhoAreWe from "./components/whoAreWe/WhoAreWe";
import ServiceWeProvide from "./components/serviceWeProvide/ServiceWeProvide";
import DevProcess from "./components/developmentProcess/DevProcess";
import FaqSection from "./components/faq/FaqSection";
import Footer from "./components/footer/Footer";

function App() {
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Navbar />
      <HeroBanner />
      <WhoAreWe />
      <ServiceWeProvide />
      <DevProcess />
      <FaqSection />
      <Footer />
    </Box>
  );
}

export default App;
