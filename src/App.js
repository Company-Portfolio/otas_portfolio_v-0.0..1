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

function App() {
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  return (
    <Box sx={{ overflowX: "hidden" }}>
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
