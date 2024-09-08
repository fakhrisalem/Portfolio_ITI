import React from "react";
import { GiSkills } from "react-icons/gi";
import { Line } from "rc-progress";
import { Animate, AnimateKeyframes } from "react-simple-animate";

const skillsData = [
  {
    label: "Frontend Development",
    data: [
      { skillName: "HTML", percentage: 90 },
      { skillName: "CSS", percentage: 85 },
      { skillName: "JavaScript", percentage: 80 },
    ],
  },
  {
    label: "Backend Development",
    data: [
      { skillName: "Node.js", percentage: 75 },
      { skillName: "Express.js", percentage: 70 },
      { skillName: "MongoDB", percentage: 65 },
    ],
  },
  {
    label: "Tools & Technologies",
    data: [
      { skillName: "Git", percentage: 90 },
      { skillName: "Docker", percentage: 70 },
      { skillName: "Figma", percentage: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <style>
        {`
          .skills {
            padding: 20px;
            background-color: #282c34;
              font-family: Sans-Serif;
               color: DodgerBlue;
          }

          .page-header-content {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
          }

          .skills__content-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
              color: white;

          }

          .skills__content-wrapper__inner-content {
            margin-bottom: 20px;
           

            
          }

          .skills__content-wrapper__inner-content__category-text {
            font-size: 24px;
            margin-bottom: 10px;
            
            
          }

          .progressbar-wrapper {
            margin-bottom: 10px;
            
          }

          /* Styles for the progress bar */
          .rc-progress-line {
            height: 10px;
            
          }

          .rc-progress-line-path {
            stroke-width: 2px;
          }

          .rc-progress-line-trail {
            stroke-width: 2px;


          }
        `}
      </style>

      <section id="skills" className="skills">
        <div className="page-header-content">
          <h2 style={{ textAlign: "center" }}>My Skills</h2>
          <GiSkills size={40} />
        </div>
        <div className="skills__content-wrapper" style={{ textAlign: "center" }}>
          {skillsData.map((item, key) => (
            <div key={key} className="skills__content-wrapper__inner-content">
              <Animate
                play
                duration={1}
                delay={0.4}
                start={{ transform: "translateX(-250px)" }}
                end={{ transform: "translateX(0px)" }}
              >
                <h3 className="skills__content-wrapper__inner-content__category-text">
                  {item.label}
                </h3>
                <div>
                  {item.data.map((dataItem, index) => (
                    <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity: 1", "opacity: 0"]}
                      iterationCount="1"
                    >
                      <div className="progressbar-wrapper" key={index} style={{ fontSize: "12px" }}>
                        <p>{dataItem.skillName}</p>
                        <Line
                          percent={dataItem.percentage}
                          strokeWidth="2"
                          strokeColor="var(--selected-theme-main-color)"
                          strokeLinecap="square"
                          trailWidth="2"
                        />
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;