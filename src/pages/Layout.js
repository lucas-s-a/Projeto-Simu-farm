import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <div className="emlinha2">
          <div className="i2">
            <img className="posimg" width="100px" src='' alt="logo"/>
          </div>
          <div className="i2">
            <div>
              <ul className="emlinhas">
                <Link to="/"><li className="itens">Home</li></Link>
                <Link to="/Get"><li className="itens">Ver Lista</li></Link>
                <li className="itens">
                  Contato
                </li>
                <li className="itens">
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
};

export default Layout;