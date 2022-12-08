import React from "react";
import "./skills.css";

const frontendSkills = [
  {
    title: "HTML",
    width: "80%",
    percentage: "80%",
  },
  {
    title: "CSS",
    width: "85%",
    percentage: "85%",
  },
  {
    title: "Javascript",
    width: "75%",
    percentage: "75%",
  },
  {
    title: "React",
    width: "50%",
    percentage: "50%",
  },
];
const languages = [
  {
    title: "C",
    width: "80%",
    percentage: "80%",
  },
  {
    title: "C++",
    width: "90%",
    percentage: "90%",
  },
  {
    title: "Python",
    width: "50%",
    percentage: "50%",
  },
  {
    title: "Flutter",
    width: "10%",
    percentage: "10%",
  },
];

const Skills = () => {
  return (
    <div className="skills_wrapper d-flex gap-5">
      <div className="frontend_skill w-50">
        {frontendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>

      <div className="languages w-50">
        {languages.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ title, percentage }) => {
  return (
    <div className="skill_data">
      <div className="skill_title d-flex align-items-center justify-content-between ">
        <h6>{title}</h6>
        <span>{percentage}</span>
      </div>

      <div className="skill_bar">
        <span
          className="skill_bar_percentage "
          style={{ width: `${percentage}` }}
        ></span>
      </div>
    </div>
  );
};

export default Skills;
