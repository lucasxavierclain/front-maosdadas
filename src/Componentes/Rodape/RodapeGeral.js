import React from 'react';
import './rodape.css'
// import icones from '../imagens/icones.png';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { AiOutlineWhatsApp } from "react-icons/ai";
function RodapeGeral() {
    return (

        <div className="rodape ">
            <div className='d-flex justify-content-around'>
                <div className='nossoSite'>
                    <h5>Nosso site</h5>
                    <a href='/'><p>Home</p></a>
                    <a href='/produtos'><p>Produtos</p></a>
                    <a href='/servicos'><p>Serviços</p></a>
                    <a href='/contato'><p>Contato</p></a>
                    <a href='#menu'><p>Voltar ao topo</p></a>
                </div>
                <a href='/'><img src={require('../../Imagens/mao.png').default} class="img-fluid mt-5" id='logoRodape' alt="Logo de mãos dadas" width="100%" /></a>
                <div className='nossasRedes'>
                    <h5>Nossas redes sociais</h5>
                    <a href='https://www.facebook.com/'><FiFacebook className="icon" /> Facebook</a><br/>
                    <a href='https://www.instagram.com/'><FiInstagram className='icon'/> Instagram</a><br/>
                    <a href='https://web.whatsapp.com/'><AiOutlineWhatsApp className='icon'/> Whatsapp</a><br/>
                </div>

               
            </div>
            <hr/>
            <p>&copy; Recode Pro</p>

        </div>

    )
}


export default RodapeGeral;