import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Listar = () => {
  const [dados,setDados] = useState([]);
  const [barra,setBarra] = useState('')
  
  let Url = `https://projeto-apredendoo-servidor-json.vercel.app/`+barra;
  function Cdados() {
    axios.get(Url).then((res) => {
      setDados(res.data);
    });
  }
  return (<>
  <div>
    <div>
      <h1>Veja aqui o itens que estão na sua lista de desejos</h1>
    </div>
    <div>
      <button><Link to={"/Post"} >Add Users</Link></button>
    </div>
    <div>
      <nav>
        <h1>todos os dados</h1>
      </nav>
      <select onChange={(e)=>{const selecao = e.target.value;setBarra(selecao)}}>
        <option value="Erro">---------</option>
        <option value="Medicamentos">Medicamentos</option>
        <option value="Vitaminas">Vitaminas</option>
        <option value="Lanches_Rapidos">Lanches Rápidos</option>
        <option value="Acessorios_Treino">Acessorios Treino</option>
        <option value="Tratamentos_Capilares">Tratamentos Capilares</option>
        <option value="Saude_Sexual">Público Masculino</option>
        <option value="Ortopedicos">Ortopedicos</option>
        <option value="Alimentacao_infantil">Alimentacao Infantil</option>
        <option value="Suplementos_Academia">Suplementos_Academia</option>
        <option value="Beleza">Beleza</option>
        <option value="Cabelo">Cabelo</option>
        <option value="Higiene-Pessoal">Higiene Pessoal</option>
      </select>
      <div>
        <button onClick={Cdados}>Buscar</button>
      </div>
    </div>
      {dados.map((data) => {
        return <div key={data.id}>
          <div>
            <div>
              <img width="100px" src={data.imgl} alt="imagenspegadas"/>
            </div>
            <div>
              <ul>
                <li>{data.nome}</li>
                <li>{data.descricao}</li>
                <li>{data.preco}</li>
              </ul>
            </div>
            <div>
              <Link to={`/Editar/${barra}/${data.id}`}>Editar</Link>
            </div>
            <div>
              <Link to={`/Deletar/${barra}/${data.id}`}>Deletar</Link>
            </div>
          </div>
        </div>
      })}
  </div>
  
  </>)
};
export default Listar;