import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Editd = () => {
  const { id,barra } = useParams();

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
    <div className="dadostexto">
      <form class="row g-3">
            <div class="col-md-4">
              <label class="form-label">Nome:</label>
              <input class="form-control"
                value={nome}
                type="text"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div>
              <label class="form-label">Preço:</label>
              <input class="form-control"
                value={preco}
                type="text"
                onChange={(e) => setPreco(e.target.value)}
              />
            </div>
            <div>
              <label class="form-label">Descrição:</label>
              <textarea class="form-control"
                value={descricao}
                type="text"
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
            <div>
              <label class="form-label">Url da Imagem:</label>
              <textarea class="form-control"
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