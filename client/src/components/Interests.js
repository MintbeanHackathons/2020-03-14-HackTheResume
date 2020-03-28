import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Interests({ interests }) {
  const interestsCard = interests.map(data => {
    const interestsHighlights = data.keywords.map(item => {
      return (
        <li className="interests__list-item" key={uuidv4()}>
          {item}
        </li>
      );
    });
    return (
      <div className="interests__card">
        <p className="interests__title">{data.name}</p>
        <ul className="interests__list">{interestsHighlights}</ul>
      </div>
    );
  });

  return (
    <div className="interests">
      <p className="interests__title">Interests</p>
      {interestsCard}
    </div>
  );
}
