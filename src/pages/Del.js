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
    axios.delete(`https://projeto-apredendoo-servidor-json.vercel.app/${barra}/${id}`).then(navigate("/"));
  }

  return(<div>
    <div>
      <h1>Risca da Lista</h1>
    </div>
    <div>
    <div>
        <Link to={`/`}>Não Risca</Link>
        {dados && (
          <div>
            <div>
              <h2>
                Nome
              </h2>
              <h2>
                Preço
              </h2>
              <h2>
                Descrição
              </h2>
              <h2>
                Foto
              </h2>
            </div>
            <div>
              <h2>
                {dados.nome}
              </h2>
              <h2 >
                {dados.preco}
              </h2>
              <h2>
                {dados.descricao}
              </h2>
              <h2>
                {dados.imgl}
              </h2>
            </div>
            <div>
            <button onClick={()=>deletar()}>Risca da lista</button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    );
};
  
export default Deld;