// Main.js
import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Profile from "./Profile";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Main() {
  const profileData = {
    name: "Your Name",
    bio: "A brief bio about yourself",
    location: "Your Location",
  };

  const skillsData = ["Skill 1", "Skill 2", "Skill 3"];

  const projectsData = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
  ];

  const contactData = {
    email: "youremail@example.com",
    linkedin: "https://www.linkedin.com/in/yourprofile/",
  };

  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/">
          <Profile {...profileData} />
        </Route>
        <Route path="/skills">
          <Skills skills={skillsData} />
        </Route>
        <Route path="/projects">
          <Projects projects={projectsData} />
        </Route>
        <Route path="/contact">
          <Contact {...contactData} />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
