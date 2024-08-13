import React, { useState, useEffect } from 'react';
import Categorias from './Categorias';
import { SimpleDialogContainer, simpleAlert } from 'react-simple-dialogs';


//fotosabaixo
import bus from '../../img/bus.jpg'
import car from '../../img/car.jpg'
import carroAr from '../../img/carroAr.jpg'
import carroBaixo from '../../img/carroBaixo.jpg'
import carroEmoto from '../../img/carroEmoto.jpg'
import carroEmoto2 from '../../img/carroEmoto2.jpg'
import carroEmotoBaixo from '../../img/carroEmotoBaixo.jpg'
import carroEmotoCentro from '../../img/carroEmotoCentro.jpg'
import carroEmotoCima from '../../img/carroEmotoCima.jpg'
import carrolado3 from '../../img/carrolado3.jpg'
import carrosLado from '../../img/carrosLado.jpg'
import carrosLados2 from '../../img/carrosLados2.jpg'
import carroVolante from '../../img/carroVolante.jpg'
import DSC_2529 from '../../img/DSC_2529.jpg'
import equipe from '../../img/equipe.jpg'
import equipe2 from '../../img/equipe2.jpg'
import equipe3 from '../../img/equipe3.jpg'
import geral from '../../img/geral.jpg'
import geral2 from '../../img/geral2.jpg'
import geralCima from '../../img/geralCima.jpg'
import geralCima2 from '../../img/geralCima (2).jpg'
import geralLado from '../../img/geralLado.jpg'
import IMG_20240629_WA0007 from '../../img/IMG-20240629-WA0007.jpg'
import logo2 from '../../img/logo2.jpg'
import logo3 from '../../img/logo3.jpg'
import logov from '../../img/logov.jpg'
import logover from '../../img/logover.jpg'
import motoBaixo from '../../img/motoBaixo.jpg'
import motoBaixo2 from '../../img/motoBaixo2.jpg'
import motoBaixo3 from '../../img/motoBaixo3.jpg'
import motocicleta from '../../img/motocicleta.jpg'
import motoMeio from '../../img/motoMeio.jpg'
import motoMeio2 from '../../img/motoMeio2.jpg'
import motos from '../../img/motos.jpg'
import motosTras from '../../img/motosTras.jpg'


//fotosacima


import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from "../../img/logo.jpg"; 
import './Home.style.css'


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

  const images = [
    carroBaixo,
    carroEmoto,
    carroEmoto2,
    carroEmotoBaixo,
    carroEmotoCentro,
    carroEmotoCima,
    carrolado3,
    carrosLado,
    carrosLados2,
    DSC_2529,
    equipe,
    equipe2,
    equipe3,
    geral,
    geral2,
    geralCima,
    geralCima2,
    geralLado,
    motoBaixo,
    motoBaixo2,
    motoBaixo3,
    motocicleta,
    motoMeio,
    motoMeio2,
    motos,
    motosTras,
];

const motosImg = [
  motoBaixo,
  motoBaixo2,
  motoBaixo3,
  motocicleta,
  motoMeio,
  motoMeio2,
  motos,
  motosTras,
]

export default function Home(){
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [categoriaIndex, setCategoriaIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [motoImagens, setMotoImagens] = useState(0);

    useEffect(() => {
      simpleAlert('Aquelas aulas que você merece, venha para a AutoLEM!!');

        const textInterval = setInterval(() => {
          setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 3000);
    
        const categoriaInterval = setInterval(() => {
          setCategoriaIndex(prevIndex => (prevIndex + 1) % categorias.length);
        }, 3000);
    
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);

      const motoImagens = setInterval(() => {
        setMotoImagens((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

        return () => {
          clearInterval(textInterval);
          clearInterval(categoriaInterval);
          clearInterval(interval)
        };
      }, []);

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

          <SimpleDialogContainer />
                  <main>
      <h1 className="formando">Formando</h1>
          <h1 className="condutor">Novos condutores</h1>
        <div className="text-content">

          <div>
          <div className="texto" dangerouslySetInnerHTML={{ __html: texts[currentTextIndex] }} />
            
          </div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          
        </div>
        <div className="slideshow-container">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slide-image"
            />
        </div>
        <br /><br /><br /><br /><br />
        <div className='matriculas'>
            <div>
                <Categorias/>
            </div>
        </div>
      </main>
        </div>
    )
}