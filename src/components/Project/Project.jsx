//dependencies
import React from "react";

const Project = ({ key, name, description, address, photo }) => {
  return (
    <div className="Project" key={key}>
      <img src={photo} alt={name} />
      <div className="Proyect__info">
        <h3 className="Proyect__info-title">{name}</h3>
        <a className="Proyect__info-link" href={address}>
          Clic here and visit it
        </a>
        <p className="Project__info-description">{description}</p>
      </div>
    </div>
  );
};

export default Project;
