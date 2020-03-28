import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Work({ work }) {
  const workCard = work.map(data => {
    const workHighlights = data.highlights.map(item => {
      return (
        <li className="work__list-item" key={uuidv4()}>
          {item}
        </li>
      );
    });
    return (
      <div className="work__card">
        <p className="work__organization">{data.company}</p>
        <p className="work__position">{data.position}</p>
        <div className="work__label">{`${data.startDate} - ${data.endDate}`}</div>
        <p className="work__summary">{data.summary}</p>
        <ul className="work__list">{workHighlights}</ul>
      </div>
    );
  });

  return <div className="work">{workCard}</div>;
}
