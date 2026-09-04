import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-11 col-lg-9 mx-auto about-content">
              <h1>About me</h1>
              <p>
                Hello! I am Aanand Mahawal, and I love building intelligent
                systems that solve real problems - taking an idea from a rough
                notebook experiment all the way to a product people can
                actually use. I am a B.Tech graduate in Electronics and
                Communication Engineering from NIT Kurukshetra, where my
                curiosity for how machines learn grew into a clear focus on
                Artificial Intelligence, Machine Learning, and Data Science.
                That focus shows in what I build: multi-agent LLM systems,
                retrieval-augmented (RAG) pipelines, and end-to-end MLOps
                workflows that ship as live, usable applications. My toolkit
                spans Python, C++, Scikit-learn, XGBoost, TensorFlow, PyTorch,
                FastAPI, Docker, and Streamlit, backed by strong fundamentals
                in data structures, statistics, and SQL. Along the way I have
                solved 1000+ DSA problems, earned Oracle Cloud certifications
                in Data Science and Generative AI, and secured an on-campus
                Data Scientist offer from Tredence. I am always exploring what
                is next in intelligent systems and looking for opportunities
                to build AI that creates measurable impact.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
