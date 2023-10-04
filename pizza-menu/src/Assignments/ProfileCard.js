import React from "react";
import "./profile.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

const ProfileCard = () => {
  function SkillList() {
    return (
      <div className="skill-list">
        <div className="skill-list">
          {skills.map((skill) => (
            <Skill
              skill={skill.skill}
              color={skill.color}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    );
  }

  function Skill({ skill, level, color }) {
    return (
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>
          {level === "beginner" && "👶"}
          {level === "intermediate" && "👍"}
          {level === "advanced" && "💪"}
        </span>
      </div>
    );
  }

  return (
    <div className="card">
      <img
        src={require("./Assets/Profile.jpg")}
        alt="profile"
        className="avatar"
      />
      <div className="data">
        <h1>Ananda Sankar Panda</h1>
        <p>
          Hi, I am Ananda Panda and I work as a web developer. I am a software
          engineer who loves to create websites as well as apps for people. I
          think that people should look at the bigger picture when they are
          building something. I love to work in groups where everyone can voice
          their opinions and ideas
        </p>
      </div>
      <SkillList />
    </div>
  );
};

export default ProfileCard;
