import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [nutri, SetNutri] = useState([]);

  //Pega os dados da API quando a pagina for carregada
  useEffect(() => {
    function loadApi() {
      //URL da API
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      //Metodo do javascript usada para fazer requisicoes HTTP. Ele permite buscar rescursos como APIs e arquivos de servidores externos
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          SetNutri(data);
        });
    }

    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {/* Map: E uma funcao de array do javascript usada para criar um novo array transformando cada elemento do array original */}
      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="title">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">{item.subtitulo}</p>
            <a className="botao">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
