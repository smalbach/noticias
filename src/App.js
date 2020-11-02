import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import axios from "axios";
import ListadoNoticias from "./components/ListadoNoticias";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  //Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState("technology");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      //
      const url = `https://newsapi.org/v2/top-headlines?country=ca&category=${categoria}&apiKey=${API_KEY}`;
      const respuesta = await axios.get(url);

      guardarNoticias(respuesta.data.articles);
    };
    consultarApi();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de noticias " />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
