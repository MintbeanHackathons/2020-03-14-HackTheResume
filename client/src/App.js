import React, { useState } from "react";

import "./styles/App.css";

//components
import Basics from "./components/Basics";
import Work from "./components/Work";
import Volunteer from "./components/Volunteer";
import Education from "./components/Education";
import Awards from "./components/Awards";
import Publications from "./components/Publications";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Interests from "./components/Interests";
import References from "./components/References";

//data import
import myResume from "./data/myResume.json";

function App() {
  const [resume, setResume] = useState(myResume);

  return (
    <div className="app">
      <Basics basics={resume.basics} />
      <Work work={resume.work} />
      <Volunteer volunteer={resume.volunteer} />
      <Education education={resume.education} />
      <Awards awards={resume.awards} />
      <Publications publications={resume.publications} />
      <Skills skills={resume.skills} />
      <Languages languages={resume.languages} />
      <Interests interests={resume.interests} />
      <References references={resume.references} />
    </div>
  );
}

export default App;
