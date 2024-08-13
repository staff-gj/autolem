import './Contato.css';
import Footer from "./Footer";
import Layout from "./Layout";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from "../../img/logo.jpg";


export default function Contato() {    

    return (
        <div>
            <Layout />
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
<div className='contatopag'>
            <div className="custom-attendance">
                <div className="custom-attendance-header">
                    <h1>O atendimento personalizado que você merece!</h1>
                </div>
                <div className="whatsapp-chat-box">
                    <div className="whatsapp-chat-header">
                        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
                    </div>
                    <div className="whatsapp-chat-message">
                        <div className="whatsapp-message question">
                            <span>Como eu realizo a minha matrícula?</span>
                        </div>
                        <div className="whatsapp-message answer">
                            <span>Simples! Só clicar no botão abaixo e seu atendimento começa imediatamente</span>
                        </div>
                    </div>
                </div>
                <div className="custom-attendance-footer">
                    <button className="custom-attendance-register-button">Faça a sua matrícula agora</button>
                </div>
            </div>
</div>
            <Footer />
        </div>
    );
}
