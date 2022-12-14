import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Deld = () => {
  const { id,barra } = useParams();
  const [dados, setDados] = useState([]);
  console.log(id)
  console.log(barra)
  
  
  useEffect(() => {
    axios.get(`https://projeto-apredendoo-servidor-json.vercel.app/${barra}/${id}`).then((res) => {
      setDados(res.data);
    });
  }, []);

  const navigate = useNavigate();

  function deletar() {
    axios.delete(`https://projeto-apredendoo-servidor-json.vercel.app/${barra}/${id}`).then(navigate("/Get"));
  }

  return(<div>
    <div className="itemheader">
      <header>
        <h1>Risca da Lista</h1>
      </header>
    </div>
    <main>
      <div className="caixadedadosdel">
        {dados && (
          <div className="caixadadosdel">
            <div>
              <h2 className="layoutitemd">
                Nome: {dados.nome}
              </h2>
              <h2 className="layoutitemd">
                Preço: {dados.preco}
              </h2>
              <h2 className="layoutitemd">
                Descrição: {dados.descricao}
              </h2>
              <h2 className="layoutitemd">
                Foto :{dados.imgl}
              </h2>
            </div>
          </div>)}
      </div>
      <div className="caixadebotoes">
        <Link to={`/`} className="bt1">Manter na Lista</Link>
        <button className="bt2" onClick={()=>deletar()}>Riscar da lista</button>
      </div>
    </main>
  </div>);
};
  
export default Deld;