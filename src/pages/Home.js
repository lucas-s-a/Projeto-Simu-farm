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
      <div class="col-md-12"></div>
      <div class="container">
        <div class="row" id="slide">
          <div class="col-md-4">
            <h1 id="nossos-cursos">O que é o SimuFarme</h1>
            <ul>
              <button class="botao-topico an">Acesse a Demo do sistema</button>
              <button class="botao-topico an1">Acesse a Demo do sistema</button>
              <button class="botao-topico an2">Acesse a Demo do sistema</button>
              <button class="botao-topico an3">Acesse a Demo do sistema</button>
              <button class="botao-topico an4">Acesse a Demo do sistema</button>
            </ul>
            <a href="produtos.html">
              <button class="botao-slide">Acesse a Demo do sistema</button>
            </a>
          </div>

          <br></br>
          <div
            id="carouselExampleControls"
            class="col-md-7 col-sm-12 carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleControls"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselExampleControls" data-slide-to="1"></li>
              <li data-target="#carouselExampleControls" data-slide-to="2"></li>
              <li data-target="#carouselExampleControls" data-slide-to="3"></li>
            </ol>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="w-100"
                  src="https://pharmaveritas.com.br/wp-content/themes/pharma/assets/img/dif-entrega.jpg"
                  alt="programando"
                />
              </div>

              <div class="carousel-item">
                <img class="w-100" src={s1} alt="programando" />
              </div>

              <div class="carousel-item">
                <img class="w-100" src={s2} alt="programando" />
              </div>

              <div class="carousel-item">
                <img class="w-100" src={s3} alt="programando" />
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Anterior</span>
            </a>

            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Próximo</span>
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

      <div class="container py-3">
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Nossos Planos</h1>
      </div>
    
  
    
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Basic</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mês</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Até 3 categorias</li>
                <li>5 produtos em cada</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-outline-primary">Acesse seu sistema</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Pro</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mês</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li></li>
                <li>Até 10 categorias</li>
                <li>20 produtos em cada</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Assine Agora</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-primary">
            <div class="card-header py-3 text-bg-primary border-primary">
              <h4 class="my-0 fw-normal">Enterprise</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mês</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
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
