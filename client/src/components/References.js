import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function References({ references }) {
  const referencesList = references.map(data => {
    return (
      <li className="references__list-item" key={uuidv4()}>
        <p className="references__title">{data.name}</p>
        <p className="references__fluency">{data.reference}</p>
      </li>
    );
  });

  return (
    <div className="references">
      <div className="reference__title">References</div>
      <ul className="references__list">{referencesList}</ul>
    </div>
  );
}
