import React, { useState } from 'react';
import Footer from "./Footer";
import Layout from "./Layout";
import './Matricula.css';
import moto from '../../img/DSC_2529.jpg';
import carro from '../../img/carrosLado.jpg';
import bus from '../../img/geral.jpg';
import carroEmoto from '../../img/carroEmotoCentro.jpg';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from "../../img/logo.jpg";

export default function Matricula() {
    // Estado para a mensagem do WhatsApp
    const [chatMessage, setChatMessage] = useState(
        "Olá, tudo bem com você? Venha já para a Auto escola de qualidade que você merece! Entre em contato clicando abaixo"
    );

    // Função para atualizar a mensagem quando o botão for clicado
    const handleButtonClick = (message) => {
        setChatMessage(message);
    };

    return (
        <div>
            <FloatingWhatsApp 
                phoneNumber="77998343655" 
                accountName="Nova AutoLem" 
                allowEsc 
                allowClickAway 
                notification={true}
                notificationSound={true}
                avatar={logo}
                statusMessage='Online'
                placeholder='Eu quero me matricular agora!!'
                chatMessage={chatMessage}
            />

            <Layout />
            <div className="global">
                <div className="App">
                    <div className="header">
                        <h1>1° Habilitação</h1>
                    </div>
                    <div className="categories">
                        <div className="category">
                            <img src={moto} alt="Categoria A" />
                            <button 
                                className="category-label"
                                onClick={() => handleButtonClick("Boa noite, quero me matricular para tirar a CNH Categoria A")}
                            >
                                Categoria A
                            </button>
                        </div>
                        <div className="category">
                            <img src={carro} alt="Categoria B" />
                            <button 
                                className="category-label"
                                onClick={() => handleButtonClick("Boa noite, quero me matricular para tirar a CNH Categoria B")}
                            >
                                Categoria B
                            </button>
                        </div>
                        <div className="category">
                            <img src={carroEmoto} alt="Categoria AB" />
                            <button 
                                className="category-label"
                                onClick={() => handleButtonClick("Boa noite, quero me matricular para tirar a CNH Categoria AB")}
                            >
                                Categoria AB
                            </button>
                        </div>
                    </div>
                    <p className="texto">
                        Escolhendo a Autoescola Autolem, você está optando por qualidade, segurança e conforto
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
