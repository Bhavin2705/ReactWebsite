import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom"; // Import useLocation
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

const About = React.lazy(() => import("./components/about/About"));
const Classes = React.lazy(() => import("./components/classes/Classes"));
const YogaClass = React.lazy(() => import("./components/yogaClass/YogaClass"));
const TrainersPage = React.lazy(() =>
  import("./components/trainersPage/TrainersPage")
);
const TrainerSingle = React.lazy(() =>
  import("./components/trainerSingle/TrainerSingle")
);
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Schedule = React.lazy(() => import("./components/schedule/Schedule"));


const App = () => {
  const location = useLocation(); 

  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes key={location.pathname}> {/* Add key based on pathname */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="classes" element={<Classes />} />
          <Route path="yogaClass" element={<YogaClass />} />
          <Route path="trainers" element={<TrainersPage />} />
          <Route path="singleClass" element={<TrainerSingle />} />
          <Route path="contact" element={<Contact />} />
          <Route path="schedule" element={<Schedule />} />
          {/* <Route path="calculator" element={<Calculator />} /> */}
          
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
