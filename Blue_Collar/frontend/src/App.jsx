import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/jobs/:jobId"
          element={<JobDetails />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;