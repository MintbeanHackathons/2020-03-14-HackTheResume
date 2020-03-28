import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Awards({ awards }) {
  const awardsList = awards.map(data => {
    return (
      <li className="awards__list-item" key={uuidv4()}>
        <p className="awards__title">{data.title}</p>
        <p className="awards__date">{data.date}</p>
        <p className="awards__from">{data.awarder}</p>
        <p className="awards__summary">{data.summary}</p>
      </li>
    );
  });

  return (
    <div className="awards">
      <ul className="awards__list">{awardsList}</ul>
    </div>
  );
}
