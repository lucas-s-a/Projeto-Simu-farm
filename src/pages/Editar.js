import axios from "axios";
import estilos from "./Formestilo.module.css"
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Editd = () => {
  const { id,barra } = useParams();
  console.log(id)
  console.log(barra)

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imgl, setImgl] = useState("");

  useEffect(() => {
    axios.get(`https://projeto-apredendoo-servidor-json.vercel.app/${barra}/${id}`).then((res) => {
      setNome(res.data.nome);
      setPreco(res.data.preco);
      setDescricao(res.data.descricao);
      setImgl(res.data.imgl);
    });
  }, []);

  const data = {
    nome: nome,
    preco: preco,
    descricao: descricao,
    imgl : imgl
  };

  function Atualizar(e) {
    e.preventDefault();
    axios.put(`https://projeto-apredendoo-servidor-json.vercel.app/${barra}/${id}`, data).then(navigate("/Get"));
  }

  const navigate = useNavigate();

  return(<div>
    <div className="itemheader">
      <header>
        <h1>Atualizar Produto da lista {barra}</h1>
      </header>
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
          onClick={Atualizar}
          >Atualizar os Seguintes Dados
        </button>
      </div>
    </div>
    </div>);
};

export default Editd;