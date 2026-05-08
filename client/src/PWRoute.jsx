import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Homepage";
import Resources from "./resources/Resources";
import SuccessStories from "./successStories/SuccessStories";
import AboutAdoption from "./about/Aboutadoption";

const PWRoute = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/about-adoption" element={<AboutAdoption />}></Route>
        <Route path="success-stories" element={<SuccessStories />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
      </Routes>
    </>
  );
};

export default PWRoute;
