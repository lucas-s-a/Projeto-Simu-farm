import { Outlet, Link } from "react-router-dom";
import {useState,useEffect} from "react";
import Loading from "../componentes/Loading";
import logo from "../Imagens/UNIFARMA.png"

const Layout = () => {
  const [loading, setLoading] = useState(true);
    
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
        <header>
          <div className="blocop">
            <div className="ebloco1">
              <img className="bloco1" width="100px" src={logo} alt="logo"/>
            </div>
            <div className="ebloco2">
              <ul className="nav">
                <li className="ordemli"><Link to="/"><button className="estilobotao">Home</button></Link></li>
                <li className="ordemli"><Link to="/Get">
                  <button className="estilobotao">Lista de Produtos</button>
                </Link></li>
                <li className="ordemli"><button className="estilobotao">Contato</button></li>
                <li className="ordemli"><button className="estilobotao">Sobre</button></li>
              </ul>       
            </div>
          </div>
        </header>      
  
        <Outlet />
      </>
    )
  }
};

export default Layout;