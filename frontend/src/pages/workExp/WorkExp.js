import React from "react";
import { SiPython } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="June 2025 - July 2025"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiPython />}
            >
              <h3 className="vertical-timeline-element-title">
                Research Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                NIT Kurukshetra
              </h4>
              <p>
                Engineered a secure encryption-decryption pipeline, showcasing
                innovation in lightweight cryptographic design for secure
                communication systems.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
