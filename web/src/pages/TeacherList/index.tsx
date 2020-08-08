import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject" >Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day" >Dia da semana</label>
                        <input type="text" id="week-day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time" >Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </ PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://i.pinimg.com/originals/cd/c6/d6/cdc6d693a9c695e507a5aa1aaa052a8c.jpg" alt="Imagem" />                       
                        <div>
                            <strong>Diego Fernandes</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Teste de teste sem graça, acheri melhor e mais sensato resumir.
                        <br /> <br />
                        bla bla bla bla.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>    
        </div>
    )
}

export default TeacherList;