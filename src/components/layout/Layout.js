import React, { useState, useEffect } from 'react';
import logo from "../../img/logover.jpg";
import bus from "../../img/bus.jpg";
import car from "../../img/car.jpg";
import motorcycle from "../../img/motocicleta.jpg";
import "./Layout.style.css";
import Categorias from './Categorias';

const texts = [
  "<h1>A mais completa de Barreiras</h1>Curso teórico e prático para obter sua primeira habilitação na categoria “A”, “B” e “AB”.",
  "<h1>Venha aprender a dirigir</h1> a melhor autoescola da cidade com tudo que você precisa!",
  "<h1>Instrutores qualificados e veículos novos</h1>Proporsionando segurança e conforto a todo momento.",
];

const categorias = [ 
    'CNH CATEGORIA A A habilitação na Categoria “AB”, permite ao cidadão dirigir veículos motorizados de 02 ou 03 rodas, sem ou com carro lateral (Reboque) e também veículos de 04 rodas, com até oito lugares, mais o do motorista, e peso bruto de até 3.500kg.',
    'CNH CATEGORIA B A habilitação na Categoria “B”, permite ao cidadão dirigir veículos motorizados de 04 rodas, com até oito lugares, mais o do motorista, e peso bruto de até 3.500kg. Ex: automóveis e caminhonetes;', 
    'CNH CATEGORIA D Permite ao cidadão dirigir todos os veículos da categoria "B" e "C", e também veículos utilizados no transporte de passageiros, cuja lotação exceda a nove lugares (passageiro mais motorista). Ex.: ônibus, micro-ônibus, tratores e caminhões;'
];

export default function Layout() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [categoriaIndex, setCategoriaIndex] = useState(0);

    useEffect(() => {
        const textInterval = setInterval(() => {
          setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 3000);
    
        const categoriaInterval = setInterval(() => {
          setCategoriaIndex(prevIndex => (prevIndex + 1) % categorias.length);
        }, 3000);
    
        return () => {
          clearInterval(textInterval);
          clearInterval(categoriaInterval);
        };
      }, []);
        
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="barra">
          <ul>
            <li>HOME</li>
            <li>QUEM SOMOS</li>
            <li>MATRÍCULA</li>
            <li>CONTATO</li>
          </ul>
        </nav>
      </header>
      <main>
      <h1 className="formando">Formando</h1>
          <h1 className="condutor">Novos condutores</h1>
        <div className="text-content">

          <div>
          <div className="texto" dangerouslySetInnerHTML={{ __html: texts[currentTextIndex] }} />
            
          </div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          
        </div>
        <div className="images">
          <img src={car} alt="Car" className="car" />
          <img src={motorcycle} alt="Motorcycle" className="motorcycle" />
          <img src={bus} alt="Bus" className="bus" />
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className='matriculas'>
            <h1 style={{ color: '#fff'}}>Faça sua matricula!</h1>
            <div>
                <Categorias/>
            </div>
        </div>
      </main>
      <footer className='headerFooter'>
        <p style={{ color: '#fff' }}>Centro de Formação de Condutores Nova AutoLem Ltda. Todos os direitos reservados.
        Os preços de serviços anunciados neste site ou via e-mail promocional podem ser alterados sem prévio aviso. Consulte os valores disponiveis para a sua cidade através do nossos canais de atendimento; (77) 3611.1483 | 77 99834.3655 |Rua Rui Barbosa Nª 987 - Centro - Barreiras - Bahia </p>
      </footer>
    </div>
  );
}
