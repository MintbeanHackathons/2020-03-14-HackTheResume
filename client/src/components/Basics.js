import React from "react";

import image from "../assets/cpu.svg";

export default function Basics({ basics }) {
  //fix logic here
  const createProfiles = (profiles = []) => {
    return basics.profiles.map(data => {
      return (
        <a href={data.url} className="basics__link">
          {data.network}
        </a>
      );
    });
  };

  return (
    <div className="basics">
      <h2 className="basics__name">{basics.name}</h2>
      <h3 className="basics__label">{basics.label}</h3>
      <img src={image} alt="my face" className="basics__image" />
      <p className="basics__text">{basics.email}</p>
      <p className="basics__text">{basics.phone}</p>
      <a href={basics.website} className="basics__link">
        {basics.website}
      </a>
      <p className="basics__summary">{basics.summary}</p>

      <div className="basics__location">
        <p className="basics__location-label">{basics.location.address}</p>
        <p className="basics__location-label">{basics.location.postalCode}</p>
        <p className="basics__location-label">{basics.location.city}</p>
        <p className="basics__location-label">{basics.location.countryCode}</p>
        <p className="basics__location-label">{basics.location.region}</p>
      </div>
      {createProfiles()}
    </div>
  );
}
