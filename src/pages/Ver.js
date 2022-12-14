import axios from "axios";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../componentes/Loading"

const Listar = () => {
  const [dados,setDados] = useState([]);
  const [barra,setBarra] = useState('');
  const [loading, setLoading] = useState(true);
  const [removerLoading,setRemoverLoading] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading((loading) => !loading);
    };
      
    loadData();
  }, [])
  
  let Url = `https://projeto-apredendoo-servidor-json.vercel.app/`+barra;
  function Cdados() {
    setRemoverLoading(true)
    setTimeout(() => {
      axios.get(Url).then((res) => {
        setDados(res.data);
        setRemoverLoading(false)
      });
    },2000)
  }
  if (loading) {
    return <div className="caixagrid"><div className="elemento"><Loading /></div></div>
  }
  else{
    return (<>
      <div className="container-grid">
        <header className="itemheader">
          <h1>Veja aqui o itens que estão na sua lista de desejos</h1>
        </header>
        <br></br>
        <main>
          <div className="caixa">
            <div className="item1">
              <h1>Buscar Dados</h1>
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
              <div>
                <br></br>
                <button onClick={Cdados}>Buscar</button>
                <br></br>
              </div>
            </div>
            <div className="item2">
              <button><Link to={"/Post"} >Adicionar Novos itens</Link></button>
            </div>
          </div>
          <div className="caixagridcarregar">
            <div className="elemento">{removerLoading && <Loading />}</div>
          </div>
          <hr></hr>
          <div className="caixadedados">
          {dados.map((data) => {
            return <div key={data.id} className="caixadeinformação">
                <div className="imag">
                  <img width="100px" height="100px" src={data.imgl} alt="imagenspegadas"/>
                </div>
                <div className="dadostexto">
                  <ul>
                    <li>{data.nome}</li>
                    <li>{data.descricao}</li>
                    <li>{data.preco}</li>
                  </ul>
                </div>
                <div className="links">
                  <Link to={`/Editar/${barra}/${data.id}`}><button className="linktamanho">Editar</button></Link>
                </div>
                <div className="links">
                  <Link to={`/Deletar/${barra}/${data.id}`}><button className="linktamanho">Deletar</button></Link>
                </div>
            </div> 
          })}
          </div>
        </main>
      </div>
      
      </>)
  }
};
export default Listar;