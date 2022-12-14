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
    <div>
      <div>
        <Link to={`/`} className="Manterlista">Manter na Lista</Link>
        {dados && (
          <div className="caixadadosdel">
            <div>
              <h2 className="itemc">
                Nome: {dados.nome}
              </h2>
              <h2 className="itemc">
                Preço: {dados.preco}
              </h2>
              <h2 className="itemc">
                Descrição: {dados.descricao}
              </h2>
              <h2 className="fotourl">
                Foto :{dados.imgl}
              </h2>
            </div>
            <br></br>
            <div>
              <button className="btn estilosbtn" onClick={()=>deletar()}>Riscar da lista</button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>);
};
  
export default Deld;