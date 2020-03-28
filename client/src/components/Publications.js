import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Publications({ publications }) {
  const publicationsList = publications.map(data => {
    return (
      <li className="publications__list-item" key={uuidv4()}>
        <p className="publications__title">{data.name}</p>
        <p className="publications__publisher">{data.company}</p>
        <p className="publications__date">{data.releaseDate}</p>
        <p className="publications__website">{data.website}</p>
        <p className="publications__summary">{data.summary}</p>
      </li>
    );
  });

  return (
    <div className="publications">
      <ul className="publications__list">{publicationsList}</ul>
    </div>
  );
}
