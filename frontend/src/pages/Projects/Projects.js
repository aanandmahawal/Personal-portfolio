import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
import interviewCopilotImg from "../../assets/images/project-interviewcopilot.png";
import whatsappAnalyzerImg from "../../assets/images/project-whatsapp-analyzer.png";
import churnMlopsImg from "../../assets/images/project-churn-mlops.png";
import riskcareImg from "../../assets/images/project-riskcare.png";

const projects = [
  {
    id: 1,
    title: "InterviewCopilot",
    badge: "Multi-Agent AI",
    tags: ["LangGraph", "LangChain", "RAG", "Groq"],
    image: interviewCopilotImg,
    imageFit: "cover",
    alt: "InterviewCopilot - AI resume and interview preparation",
    link: "https://interviewcopilot-myhzrad3k5n8dgprr4zeye.streamlit.app/",
    description:
      "Five specialized AI agents score your resume, match it to job descriptions, and generate tailored interview questions - grounded in a FAISS-backed RAG pipeline.",
  },
  {
    id: 2,
    title: "WhatsApp Chat Analyzer AI",
    badge: "AI Agent",
    tags: ["Tool-Calling LLM", "Pandas", "TF-IDF"],
    image: whatsappAnalyzerImg,
    imageFit: "contain",
    alt: "WhatsApp Chat Analyzer with tool-calling AI agent",
    link: "https://whatsapp-chat-analysis-ai-2udcolva34j9shwwuxlmv8.streamlit.app/",
    description:
      "Ask questions about any exported chat in plain English. A tool-calling LLM routes each query to deterministic Pandas functions, so counts and rankings are never hallucinated.",
  },
  {
    id: 3,
    title: "RiskCare",
    badge: "AI Healthcare",
    tags: ["XGBoost", "Groq Chatbot", "Streamlit"],
    image: riskcareImg,
    imageFit: "contain",
    alt: "RiskCare - ICU risk prediction and medical AI assistant",
    link: "https://ai-powered-icu-risk-prediction-healthcare-assistant-ayv3bdhwnk.streamlit.app/",
    description:
      "Predicts ICU admission risk from five patient vitals with 95% accuracy, explains the risk factors, and pairs it with a guarded medical chatbot for patient education.",
  },
  {
    id: 4,
    title: "Churn Intelligence (MLOps)",
    badge: "End-to-End MLOps",
    tags: ["Random Forest", "FastAPI", "Docker"],
    image: churnMlopsImg,
    imageFit: "cover",
    alt: "End-to-end MLOps customer churn platform",
    link: "https://end-to-end-mlops-customer-churn-platform-vzusimhxbgchrasmnkgud.streamlit.app/",
    description:
      "A modular MLOps pipeline on the IBM Telco dataset - preprocessing to inference - served through a Dockerized FastAPI API with a live retention-analytics dashboard.",
  },
];

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          AI/ML and Data Science projects - shipped as live, usable products.
          Hover over a card to read what each one does.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Fade bottom cascade>
            {projects.map((project) => (
              <div className="col-md-4" key={project.id}>
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">{project.badge}</span>
                    <img
                      src={project.image}
                      alt={project.alt}
                      className={"fit-" + (project.imageFit || "cover")}
                    />
                    <div className="card-hover-overlay">
                      <p>{project.description}</p>
                    </div>
                  </div>
                  <div className="card-image-overly m-auto mt-3">
                    {project.tags.map((tag) => (
                      <span className="card-detail-badge" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h6 className="text-uppercase">{project.title}</h6>
                    </div>
                    <a
                      className="ad-btn"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Projects;
