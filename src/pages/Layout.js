import { Outlet, Link } from "react-router-dom";
import {useState,useEffect} from "react";
import Loading from "../componentes/Loading"

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
              <img className="bloco1" width="100px" src='' alt="logo"/>
            </div>
            <div className="ebloco2">
              <div>
                <ul className="bloco2">
                  <Link to="/"><li>Home</li></Link>
                  <Link to="/Get"><li>Lista de Produtos</li></Link>
                  <li>
                    Contato
                  </li>
                  <li>
                    Sobre
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>      
  
        <Outlet />
      </>
    )
  }
};

export default Layout;