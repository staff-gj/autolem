import './Contato.css';
import Footer from "./Footer";
import Layout from "./Layout";
import logo from "../../img/logo.jpg";


export default function Contato() {    

    return (
        <div>
            <Layout />
<div className='contatopag'>
            <div className="custom-attendance">
                <div className="custom-attendance-header">
                    <h1>O atendimento personalizado que você merece!</h1>
                </div>
                <div className="whatsapp-chat-box">
                    <div className="whatsapp-chat-header">
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
