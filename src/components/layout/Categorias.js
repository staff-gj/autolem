import './Categorias.css'
import moto from '../../img/DSC_2529.jpg'
import carro from '../../img/carrosLado.jpg'
import bus from '../../img/geral.jpg'
import carroEmoto from '../../img/carroEmotoCentro.jpg'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from "../../img/logo.jpg";

export default function Categorias(){
    return(
        <div>
                      <FloatingWhatsApp 
                phoneNumber= "77998343655" 
                accountName="Nova AutoLem" 
                allowEsc 
                allowClickAway 
                notification = {true}
                notificationSound = {true}
                avatar={logo}
                statusMessage='Online'
                placeholder='Eu quero me matricular agora!!'
                chatMessage="Olá, tudo bem com você? Venha já para a Auto escola de qualidade que você merece! Entre em contato clicando abaixo"
                />

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