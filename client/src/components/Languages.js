import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Languages({ languages }) {
  const languagesList = languages.map(data => {
    return (
      <li className="languages__list-item" key={uuidv4()}>
        <p className="languages__title">{data.language}</p>
        <p className="languages__fluency">{data.fluency}</p>
      </li>
    );
  });

  return (
    <div className="languages">
      <ul className="languages__list">{languagesList}</ul>
    </div>
  );
}
