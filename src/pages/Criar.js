import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import estilos from "./FormuModel.module.css"

const Novod = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imgl, setImgl] = useState("");

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
    <div className="itemheader">
      <header>
        <h1>Adicionar um novo produto</h1>
      </header>
    </div>
    <main>
      <div>
        <h2>Primeiro Escolha o tipo de produto</h2>
      </div>
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
      <div>
        <div>
          <h2>Agora informe as especificações do novo produto</h2>
        </div>
        <div>
          <form className={estilos.caixaform}>
            <div className={estilos.itemcaixatitulo}>
              <label className={estilos.itemlabel1}>Nome:</label>
              <label className={estilos.itemlabel2}>Preço:</label>
              <label className={estilos.itemlabel3}>Descrição:</label>
              <label className={estilos.itemlabel4}>Url da Imagem:</label>
            </div>
            <div className={estilos.itemcaixatitulo}>
              <input className={estilos.iteminput1}
                value={nome}
                type="text"
                onChange={(e) => setNome(e.target.value)}
              />
              <input className={estilos.iteminput2}
                value={preco}
                type="text"
                onChange={(e) => setPreco(e.target.value)}
              />
              <input className={estilos.iteminput3}
                value={descricao}
                type="text"
                onChange={(e) => setDescricao(e.target.value)}
              />
              <input className={estilos.iteminput4}
                value={imgl}
              type="text"
              onChange={(e) => setImgl(e.target.value)}
              />
            </div>    
          </form>
          <br></br>
          <div>
            <button
              type="submit"
              onClick={submitForm}
              >Adicionar a lista
            </button>
          </div>
        </div>
      </div>
    </main>
    </div>);
  };
  
  export default Novod;