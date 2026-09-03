import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import profilePic from "../../assets/images/profile.jpg";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={profilePic} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hello! I am Aanand Mahawal, a final-year B.Tech student in
                Electronics and Communication Engineering at NIT Kurukshetra,
                focused on Artificial Intelligence, Machine Learning, and Data
                Science. I enjoy taking models beyond notebooks: building
                multi-agent LLM systems, retrieval-augmented (RAG) pipelines,
                and end-to-end MLOps workflows that ship as real, usable
                products. My toolkit spans Python, Scikit-learn, XGBoost,
                TensorFlow, PyTorch, LangChain, LangGraph, FastAPI, Docker, and
                Streamlit, backed by strong fundamentals in data structures,
                statistics, and SQL. Along the way I have solved 1000+ DSA
                problems, earned Oracle Cloud certifications in Data Science
                and Generative AI, and secured an on-campus Data Scientist
                offer from Tredence. I am always exploring what is next in
                intelligent systems and looking for opportunities to build AI
                that creates measurable impact.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
