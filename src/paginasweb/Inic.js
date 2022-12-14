import { Link } from "react-router-dom";
const Inicio = () => {
    return (
        <div>
            <div>
                <h1>Bem vindo a sua lista de compras virtual</h1>
                <h3>O que deseja Fazer hoje?</h3>
                <nav>
                    <ul>
                        <li>
                            <Link to="/PagGet">Ver Lista</Link>
                        </li>
                        <li>
                            <p>Adicionar item novo</p>
                        </li>
                        <li>
                            <p>Atualizar item Existente</p>
                        </li>
                        <li>
                            <p>Riscar um item</p>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                
            </div>
        </div>
    );
  };
  
  export default Inicio;