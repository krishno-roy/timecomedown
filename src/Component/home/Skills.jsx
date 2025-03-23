import React from "react";

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center">
        <h2 className="text-md font-medium">{skill}</h2>
        <p className="text-sm font-semibold">{percentage}%</p>
      </div>
      <div className="relative w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-black h-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { skill: "Interaction Design", percentage: 60 },
    { skill: "Usability Testing", percentage: 70 },
    { skill: "User Research", percentage: 45 },
    { skill: "Figma", percentage: 95 },
    { skill: "Prototyping", percentage: 80 },
    { skill: "Information Architecture", percentage: 50 },
  ];

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="w-3xl mx-auto text-center pb-10">
        <h1 className="text-2xl font-bold text-center mb-6">
          Core Design Skills
        </h1>
        <p>
          I excel in essential design skills, creating visually stunning and
          functional digital experiences. From UI design to UX research, my
          passion is to craft effective and memorable digital solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillItem, index) => (
          <SkillBar
            key={index}
            skill={skillItem.skill}
            percentage={skillItem.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
