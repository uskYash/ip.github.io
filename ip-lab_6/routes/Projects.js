// Projects.js
import React from "react";

function Projects(props) {
  const { projects } = props;

  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
