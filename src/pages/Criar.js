import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Novod = () => {
  const [nome, setNome] = useState("");
  const [preco, setpreco] = useState("");
  const [descricao, setdescricao] = useState("");
  const [imgl, setimgl] = useState("");

  const navigate = useNavigate();
  const [barra,setBarra] = useState('')
  let Url = `https://projeto-apredendoo-servidor-json.vercel.app/`+barra;

  const data = {
    nome: nome,
    preco: preco,
    descricao: descricao,
    imgl: imgl
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post(Url, data).then(navigate("/"));
  }
  
  return(<div>
    <div>
      <h1>Adicionar um novo produto</h1>
    </div>
    <div>
      <div>
        <h2>Primeiro Escolha o tipo de produto</h2></div>
      <div>
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
          <option value="Suplementos_Academia">Suplementos Academia</option>
          <option value="Beleza">Beleza</option>
          <option value="Cabelo">Cabelo</option>
          <option value="Higiene-Pessoal">Higiene Pessoal</option>
        </select>
      </div>
    </div>
    <div>
      <div>
        <h2>Agora informe as especificações do novo produto</h2>
      </div>
      <div>
        <form>
          <input
            value={nome}
            type="text"
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            value={preco}
            type="text"
            onChange={(e) => setpreco(e.target.value)}
          />
          <input
            value={descricao}
            type="text"
            onChange={(e) => setdescricao(e.target.value)}
          />
          <input
            value={imgl}
            type="text"
            onChange={(e) => setimgl(e.target.value)}
          />
          <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
          >Adicionar a lista
          </button>
        </form>
      </div>
    </div>
    </div>);
  };
  
  export default Novod;