import "bootstrap/dist/css/bootstrap.min.css";
import foto1 from "../Imagens/farm1.png";
import foto2 from "../Imagens/farm2.png";
import foto3 from "../Imagens/farm3.png";
import foto4 from "../Imagens/farm4.png";
import s1 from "../Imagens/slid1.jpg";
import s2 from "../Imagens/slid2.jpg";
import s3 from "../Imagens/slid3.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="col-md-12"></div>
      <div className="container">
        <div className="row" id="slide">
          <div className="col-md-4">
            <h1 id="nossos-cursos">O que é o SimuFarme</h1>
            <ul>
              <button className="botao-topico an">Acesse a Demo do sistema</button>
              <button className="botao-topico an1">Acesse a Demo do sistema</button>
              <button className="botao-topico an2">Acesse a Demo do sistema</button>
              <button className="botao-topico an3">Acesse a Demo do sistema</button>
              <button className="botao-topico an4">Acesse a Demo do sistema</button>
            </ul>
            <a href="produtos.html">
              <button className="botao-slide">Acesse a Demo do sistema</button>
            </a>
          </div>

          <br></br>
          <div
            id="carouselExampleControls"
            className="col-md-7 col-sm-12 carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleControls"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleControls" data-slide-to="1"></li>
              <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              <li data-target="#carouselExampleControls" data-slide-to="3"></li>
            </ol>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="w-100"
                  src="https://pharmaveritas.com.br/wp-content/themes/pharma/assets/img/dif-entrega.jpg"
                  alt="programando"
                />
              </div>

              <div className="carousel-item">
                <img className="w-100" src={s1} alt="programando" />
              </div>

              <div className="carousel-item">
                <img className="w-100" src={s2} alt="programando" />
              </div>

              <div className="carousel-item">
                <img className="w-100" src={s3} alt="programando" />
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Anterior</span>
            </a>

            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Próximo</span>
            </a>
          </div>
        </div>
      </div>

      <div className="Empresas">
        <div><img width="180px" src={foto1} alt="foto1"/></div>
        <div><img width="180px" src={foto2} alt="foto1"/></div>
        <div><img width="180px" src={foto3} alt="foto1"/></div>
        <div><img width="180px" src={foto4} alt="foto1"/></div>
        <div><img width="180px" src={foto1} alt="foto1"/></div>
      </div>

      <div className="container py-3">
    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Nossos Planos</h1>
      </div>
    
  
    
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Basic</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Até 3 categorias</li>
                <li>5 produtos em cada</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Acesse seu sistema</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li></li>
                <li>Até 10 categorias</li>
                <li>20 produtos em cada</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">Assine Agora</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-bg-primary border-primary">
              <h4 className="my-0 fw-normal">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
              <li>Até 15 categorias</li>
              <li>100 produtos em cada</li>
              </ul>
              <button type="button" className="botao-slide w-100 btn">Assine Agora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
