import './Categorias.css'
import moto from '../../img/DSC_2529.jpg'
import carro from '../../img/carrosLado.jpg'
import bus from '../../img/geral.jpg'
import carroEmoto from '../../img/carroEmotoCentro.jpg'
import logo from "../../img/logo.jpg";

export default function Categorias(){
    return(
        <div>

    <section className="categories">
        <h2>1º HABILITAÇÃO</h2>
        <div className="carousel">
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src={moto} alt="Categoria A" />
              <h3>Categoria A</h3>
            </div>
            <div className="carousel-item">
              <img src={carro} alt="Category Image 2" />
              <h3>Categoria B</h3>
            </div>
            <div className="carousel-item">
              <img src={bus} alt="Category Image 2" />
              <h3>Categoria D</h3>
            </div>
            <div className="carousel-item">
              <img src={carroEmoto} alt="Category Image 3" />
              <h3>Categoria AB</h3>
            </div>
          </div>
          <button className="carousel-prev">‹</button>
          <button className="carousel-next">›</button>
        </div>
      </section>
    </div>
    )
}