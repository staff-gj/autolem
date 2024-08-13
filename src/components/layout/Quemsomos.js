import Footer from "./Footer"
import Layout from "./Layout"
import './Quemsomos.css'
import carroVolante from '../../img/carroVolante.jpg'
import carroAr from '../../img/carroAr.jpg'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from "../../img/logo.jpg";
import equipe from "../../img/equipe2.jpg";


export default function Quemsomos(){
    return(
        <div>
            <Layout/>
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

            <div className="global1">
                <div className="quadrado">
                    <img className="imagem1" src={carroVolante} alt="volante" />
                    <h1 className="quadradoTexto1">POSSUÍMOS A FROTA DE CARROS <br /> MAIS MODERNA COM AR CONDICIONADO</h1>
                </div> <br /><br /><br /><br />
                <div className="quadrado">
                    <img className="imagem2" src={carroAr} alt="volante" />
                    <h1 className="quadradoTexto2">CARROS MODERNOS COM A DIREÇÃO <br /> HIDRÁULICA E 100% CONFORTÁVEIS</h1>
                </div><br /><br /><br /><br />
                <div className="quadrado">
                    <img className="imagem3" src={equipe} alt="Equipe" />
                    <h1 className="quadradoTexto2"><br /> UMA EQUIPE ANIMADA <br /> COM PROFISSIONAIS 100% QUALIFICADOS</h1><br />
                </div>
            </div>
            <Footer/>
        </div>
    )
}