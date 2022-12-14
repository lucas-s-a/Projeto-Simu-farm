import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../componentes/Loading"
import logo from "../Imagens/UNIFARMA.png"
import {motion} from 'framer-motion'

const Listar = () => {
  const [dados, setDados] = useState([]);
  const [barra, setBarra] = useState('');
  const [loading, setLoading] = useState(true);
  const [removerLoading, setRemoverLoading] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading((loading) => !loading);
    };

    loadData();
  }, [])

  let Url = `https://projeto-apredendoo-servidor-json.vercel.app/` + barra;
  function Cdados() {
    setRemoverLoading(true)
    setTimeout(() => {
      axios.get(Url).then((res) => {
        setDados(res.data);
        setRemoverLoading(false)
      }).catch((error) => {
        console.error('Error:', error);
      });
    }, 2000)
  }
  if (loading) {
    return <div className="caixagrid"><div className="elemento"><Loading /></div></div>
  }
  else {
    return (<>
      <motion.div className="container-grid"
        initial={{translateX: 0}}
        animate={{translateX: 0}}
        exit={{translateX: -3000, x: 100}}
        transition={{delay: 1}}
      >
        <header className="itemheader">
          <h1>Consulte aqui os itens na sua lista</h1>
        </header>
        <br></br>
        <main>
          <div className="containerprincipal">
            <aside className="caixaver1 anv3">
              <h4>Destaques</h4>
              <img width="210px" className="imagemdestaque1" src="https://www.nutrimundo.com.br/franquia-de-suplementos/public/img/default/franquia-de-suplementos/home/integral-medica-suplementos.jpg" alt="abc"/>
              <p className="fontcolor"> Incremente seu treino</p>
              <img width="210px" className="imagemdestaque2" src="https://www.jacalculei.com.br/wp-content/uploads/2021/09/Como-abrir-uma-loja-de-cosme%CC%81ticos-.png" alt="abc"/>
              <p className="fontcolor">Nova linha de cosméticos</p>
            </aside>
            <article className="caixaver2">
              <h3 className="elementocaixatitulo anv1">Pesquisar Itens</h3>
              <img className="elementocaixaimagem" src={logo} alt="ilustração"/>
              <select className="form-select selectmode anv2" onChange={(e) => { const selecao = e.target.value; setBarra(selecao) }}>
                <option value="Erro">---------</option>
                <option value="Medicamentos">Medicamentos</option>
                <option value="Vitaminas">Vitaminas</option>
                <option value="Lanches_Rapidos">Lanches Rápidos</option>
                <option value="Acessorios_Treino">Acessorios Treino</option>
                <option value="Tratamentos_Capilares">Tratamentos Capilares</option>
                <option value="Saude_Sexual">Público Masculino</option>
                <option value="Ortopedicos">Ortopedicos</option>
                <option value="Alimentacao_infantil">Mundo Infantil</option>
                <option value="Suplementos_Academia">Suplementos Academia</option>
                <option value="Beleza">Beleza</option>
                <option value="Cabelo">Cabelo</option>
                <option value="Higiene-Pessoal">Higiene Pessoal</option>
              </select>
              <br></br>
              <button className="estilobotaobrilho anv3 elementobotaotitulo" onClick={Cdados}>Buscar</button>
            </article>
            <div className="caixaver3">
              <div className="caixagridcarregar">
                <div className="elemento">{removerLoading && <Loading />}</div>
              </div>
              <div className="caixadedados">
                {dados.map((data) => {
                  return <div key={data.id}>
                    <div>
                      <div className="dadosbuscados">
                        <img className="tamanhoimagemcaixa" src={data.imgl} alt="imagenspegadas" />
                      </div>
                      <div className="dadosbuscados">
                        <ul className="fontdados">
                          <li>{data.nome}</li>
                          <li>{data.descricao}</li>
                          <li>{data.preco}</li>
                        </ul>
                      </div>
                      <div className="dadosbuscados tamanhocaixa">
                        <Link to={`/Editar/${barra}/${data.id}`}><button className="coresbtn">Editar</button></Link>
                      </div>
                      <div className="dadosbuscados tamanhocaixa">
                        <Link to={`/Deletar/${barra}/${data.id}`}><button className="coresbtn">Deletar</button></Link>
                      </div>
                    </div>
                  </div>
                })}
              </div>
            </div>
          </div>
        </main>
        <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted"> &copy; 2022 SimuFarme, Inc</p>

          <p
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          ></p>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <p  class="nav-link px-2 text-muted">
                Home
              </p>
            </li>
            <li class="nav-item">
              <p class="nav-link px-2 text-muted">
                Lista de Produtos
              </p>
            </li>
            <li class="nav-item">
              <p class="nav-link px-2 text-muted">Adicionar Novos Itens</p>
            </li>
            <li class="nav-item">
              <p class="nav-link px-2 text-muted">Planos</p>
            </li>
          </ul>
        </footer>
      </div>
      </motion.div>

    </>)
  }
};
export default Listar;