import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Education({ education }) {
  const educationCard = education.map(data => {
    const educationHighlights = data.courses.map(item => {
      return (
        <li className="education__list-item" key={uuidv4()}>
          {item}
        </li>
      );
    });
    return (
      <div className="education__card">
        <p className="education__organization">{data.institution}</p>
        <p className="education__position">{data.area}</p>
        <p className="education__position">{data.studyType}</p>
        <div className="education__label">{`${data.startDate} - ${data.endDate}`}</div>
        <p className="education__summary">{data.gpa}</p>
        <ul className="education__list">{educationHighlights}</ul>
      </div>
    );
  });
  return <div className="education">{educationCard}</div>;
}
