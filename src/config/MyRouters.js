import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const MyRouters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default MyRouters;
