import axios from "axios";
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
    axios.put(`https://projeto-apredendoo-servidor-json.vercel.app/${barra}/${id}`, data).then(navigate("/"));
  }

  const navigate = useNavigate();

  return(<div>
    <div>
      <h1>Atualizar Produto da lista {barra}</h1>
    </div>
    <div>
    <form>
          <label>Nome do medicamento</label>
          <input
            value={nome}
            type="text"
            onChange={(e) => setNome(e.target.value)}
          />
          <br></br>
          <label>Preço do medicamento</label>
          <input
            value={preco}
            type="text"
            onChange={(e) => setPreco(e.target.value)}
          />
          <br></br>
          <label>Descrição do medicamento</label>
          <input
            value={descricao}
            type="text"
            onChange={(e) => setDescricao(e.target.value)}
          />
          <br></br>
          <label>Url da Foto do Medicamento</label>
          <input
            value={imgl}
            type="text"
            onChange={(e) => setImgl(e.target.value)}
          />
          <br></br>
          <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Atualizar}
          >Atualizar os Seguintes Dados
          </button>
        </form>
    </div>
    </div>);
};

export default Editd;