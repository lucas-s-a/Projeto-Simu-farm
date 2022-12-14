import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (<div>
    <div data-aos="fade-down" data-aos-duration="1500" className="container">
    <div className="row" id="slide">

        <div className="col-md-4">
        <h1 id="nossos-cursos">O que é o SimuFarme</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <Link to="/Get"><button className="botao-slide">Acesse a Demo do sistema</button></Link>
      </div>
      <div id="carouselExampleControls" className="col-md-7 col-sm-12 carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleControls" data-slide-to="1"></li>
          <li data-target="#carouselExampleControls" data-slide-to="2"></li>
          <li data-target="#carouselExampleControls" data-slide-to="3"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="https://pharmaveritas.com.br/wp-content/themes/pharma/assets/img/dif-entrega.jpg" alt="programando"/>
          </div>

          <div className="carousel-item">
            <img className="w-100" src="FOTO 2" alt="programando"/>
          </div>

          <div className="carousel-item">
            <img className="w-100" src="FOTO 3" alt="programando"/>

          </div>

          <div className="carousel-item">
            <img className="w-100" src="imagens/js-img.png" alt="programando"/>
          </div>

        </div>

        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Anterior</span>
        </a>

        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Próximo</span>
        </a>

      </div>


    </div>
  </div>
  </div>);
  };

  export default Home;