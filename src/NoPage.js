import { Link } from "react-router-dom";
const NoPage = () => {
    return <div className="nopagelayout">
      <h1>Erro 404</h1>
      <h3> Página não Encontrada </h3>
      <img src="https://img.freepik.com/vetores-gratis/menino-doente-com-termometro-na-cama-crianca-com-personagem-de-desenho-animado-de-alta-temperatura-febre-sintoma-de-gripe-garoto-com-frio-paciente-relaxando-sob-o-cobertor_71593-655.jpg?w=360&t=st=1670275814~exp=1670276414~hmac=520b53d4bb9d3be1aef4e10f4819fedf0dcc2f931a78cfdcddd086e8a5a98871" alt=""/>
      <p>Verifique Sua Url</p>
      <p>Verifique sua rede</p>
      <button><Link to={`/`}>Me tire daqui</Link></button>
    </div>;
  };
  
export default NoPage;