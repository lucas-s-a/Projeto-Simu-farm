import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <div class="emlinha2">
          <div className="i2">
            <img class="posimg" width="100px" src='' alt="logo"/>
          </div>
          <div className="i2">
            <div>
              <ul class="emlinhas">
                <li className="itens">
                  <Link to="/">Home</Link>
                </li>
                <li className="itens">
                  <Link to="/Get">Ver Lista</Link>
                </li>
                <li className="itens">
                  <p>Contato</p>
                </li>
                <li className="itens">
                  <p>Sobre</p>
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