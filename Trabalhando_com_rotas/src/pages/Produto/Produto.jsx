import { useParams } from "react-router-dom";

function Produto() {
  const { id } = useParams(); //Obtem o parametro 'id'
  return (
    <>
      <h1>Pagina detalhe Produto</h1>
      <span>Meu produto e {id}</span>
    </>
  );
}

export default Produto;
