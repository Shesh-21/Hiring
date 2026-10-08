import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CareersIntro from "./components/CareersIntro";
import OpenPositions from "./components/OpenPositions";
import JobDetails from "./pages/JobDetails";
import WhyJoinUs from "./components/WhyJoinUs";
import ApplicationForm from "./components/ApplicationForm";
import FAQ from "./components/FAQ";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CareersIntro />
        <OpenPositions />
        <WhyJoinUs/>
        <ApplicationForm/>
        <FAQ/>
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/jobs/:slug"
        element={<JobDetails />}
      />
    </Routes>
  );
}

export default App;