import React from "react";
import PropTypes from "prop-types";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;
  const imagen = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title}></img>
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {imagen}

        <div className="card-content">
          <h3>{title}</h3>
          <p> {description}</p>
          <div className="card-action">
            <a
              href={url}
              target="_blank"
              rel="noonpener noreferrer"
              className="waves-effect waves-light btn"
            >
              Ver noticia completa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Noticia.protoType = {
  noticia: PropTypes.object.isRequired,
};

export default Noticia;
