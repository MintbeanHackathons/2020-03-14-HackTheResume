import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Volunteer({ volunteer }) {
  const volunteerCard = volunteer.map(data => {
    const volunteerHighlights = data.highlights.map(item => {
      return (
        <li className="volunteer__list-item" key={uuidv4()}>
          {item}
        </li>
      );
    });
    return (
      <div className="volunteer__card">
        <p className="volunteer__organization">{data.organization}</p>
        <p className="volunteer__position">{data.position}</p>
        <div className="volunteer__label">{`${data.startDate} - ${data.endDate}`}</div>
        <p className="volunteer__summary">{data.summary}</p>
        <ul className="volunteer__list">{volunteerHighlights}</ul>
      </div>
    );
  });
  return <div className="volunteer">{volunteerCard}</div>;
}
