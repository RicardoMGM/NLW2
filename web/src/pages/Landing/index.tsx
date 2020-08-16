import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { Link } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

//Componente no React, é uma função com a primeira letra maiúscula,
//que retorna um html.

//Utiliza se className, porque class é uma palavra reservado do JavaScript
function Landing() {

    const [ totalConnections, setTotalConnections] = useState(0);

    // UseEffect recebe dois parâmetros:
    // 1º A função que será executada
    // 2º Quando será executada a função, é uam array de dependências,
    // que verifica quando os valores foram alterados. Deixar vazio executa apenas uma vez. 
    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data;
            console.log(response);
            setTotalConnections(total);
        });
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="" className="hero-image" />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </ Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas" />
                        Dar aulas
                    </ Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing;