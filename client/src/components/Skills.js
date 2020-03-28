import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Skills({ skills }) {
  const skillsCard = skills.map(data => {
    const skillsHighlights = data.keywords.map(item => {
      return (
        <li className="skills__list-item" key={uuidv4()}>
          {item}
        </li>
      );
    });
    return (
      <div className="skills__card">
        <p className="skills__title">{data.name}</p>
        <p className="skills__level">{data.level}</p>
        <ul className="skills__list">{skillsHighlights}</ul>
      </div>
    );
  });

  return (
    <div className="skills">
      <p className="skills__title">Skills</p>
      {skillsCard}
    </div>
  );
}
