import React from "react";
import AboutModal from "./AboutModal/AboutModal";

const AboutMe = () => {
  return (
    <div className="w-1/2 mx-auto mt-12 mb-28">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="flex justify-end mb-2">
          <label htmlFor="about-modal" className="btn btn-xs">edit</label>
        </div>
        <div className="card-body">
          <h2 className="card-title">Name</h2>
          <p>Email</p>
          <p>University</p>
          <p>Address</p>
        </div>
      </div>
      <AboutModal></AboutModal>
    </div>
  );
};

export default AboutMe;
