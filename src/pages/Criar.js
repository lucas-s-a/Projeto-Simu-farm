import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    axios.post(Url, data).then(navigate("/Get"));
  }
  
  return(<div>
    <div className="itemheader">
      <header>
        <h1>Adicionar um novo produto</h1>
      </header>
    </div>
    <main>
      <div className="subtitulo">
        <h2>Primeiro Escolha o tipo de produto</h2>
      </div>
      <div className="seleção">
        <select className="form-select" aria-label="Default select example" onChange={(e)=>{const selecao = e.target.value;setBarra(selecao)}}>
          <option value="">Selecione</option>
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
        <div className="dadostitulo">
          <h2>Agora informe as especificações do novo produto</h2>
        </div>
        <div className="dadostexto">
          <form className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Nome:</label>
              <input className="form-control"
                value={nome}
                type="text"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Preço:</label>
              <input className="form-control"
                value={preco}
                type="text"
                onChange={(e) => setPreco(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Descrição:</label>
              <textarea className="form-control"
                value={descricao}
                type="text"
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Url da Imagem:</label>
              <textarea className="form-control"
                value={imgl}
              type="text"
              onChange={(e) => setImgl(e.target.value)}
              />
            </div>    
          </form>
          <br></br>
          <div>
            <button className="btn estilosbtn"
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