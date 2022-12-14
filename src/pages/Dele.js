import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Deld = () => {
  const { barra,id } = useParams();
  const [dados, setDados] = useState([]);  
  useEffect(() => {
    axios.get(`https://projeto-apredendoo-servidor-json.vercel.app/${barra}/${id}`).then((res) => {
      setDados(res.data).catch((error) => {
        console.error('Error:', error);
      })
    });
  }, [barra,id]);

  const navigate = useNavigate();

  function deletar() {
    axios.delete(`https://projeto-apredendoo-servidor-json.vercel.app/${barra}/${id}`).then(navigate("/Get").catch((error) => {
      console.error('Error:', error)
    }));
  }

  return(<div className="delete-responsivo">
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
        <Link to={`/Get`} ><button className="estilobotaobrilho tb">Manter na Lista</button></Link>
        <button className="bt2 estilobotaobrilho tb" onClick={()=>deletar()}>Riscar da lista</button>
      </div>
    </main>
  </div>);
};
  
export default Deld;