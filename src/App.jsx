import { Box } from "@mui/material";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import EmployeeDetail from "./pages/EmployeeDetail";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-NC35HQJ2JD");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Analytics />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
