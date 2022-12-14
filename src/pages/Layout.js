import { Outlet, Link } from "react-router-dom";
import {useState,useEffect,useRef} from "react";
import Loading from "../componentes/Loading";
import logo from "../Imagens/UNIFARMA.png"

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const menuHumburguer = useRef(null);
  const [ativo, setAtivo] = useState(false);
  const onClick = () => setAtivo(!ativo);
    
  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading((loading) => !loading);
    };
      
    loadData();
  }, [])
  if (loading) {
    return <div className="caixagrid"><div className="elemento">{<Loading />}</div></div>
  }else{
    return (
      <>
        <header className="blocop">
          <div className="ebloco1">
            <img className="bloco1" width="100px" src={logo} alt="logo" />
          </div>
          <div className={`menu_hamburger ${ativo ? "active" : "inactive"}`} onClick={onClick}>
            <div className="linha1"></div>
            <div className="linha2"></div>
            <div className="linha3"></div>
          </div>
          <div className="ebloco2">
            <ul
              ref={menuHumburguer}
              className={`nav ${ativo ? "active" : "inactive"}`}
              >
              <li className={`ordemli ${!ativo ? "active" : "inactive"}`}  onClick={onClick}><Link to="/"><button className="estilobotao">Home</button></Link></li>
              <li className={`ordemli ${!ativo ? "active" : "inactive"}`}  onClick={onClick}><Link to="/Get">
                <button className="estilobotao">Lista de Produtos</button>
              </Link></li>
              <li className={`ordemli ${!ativo ? "active" : "inactive"}`}  onClick={onClick}><Link to={"/Post"} ><button className="estilobotao">Adicionar Novos itens</button></Link></li>
              <li className="ordemli"><button className="estilobotao">Sobre</button></li>
            </ul>
          </div>
      </header>      
  
        <Outlet />
      </>
    )
  }
};

export default Layout;