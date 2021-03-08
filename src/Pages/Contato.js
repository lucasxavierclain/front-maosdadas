import Menu from "../Componentes/Menu/Menu"
import React from 'react'
import './Css/Contato.css'
import RodapeGeral from '../Componentes/Rodape/RodapeGeral'
import {RiContactsBookUploadLine} from 'react-icons/ri'

const Contato = () => {
    return (
        <>
            <Menu />
            <div className="container container-fluid  d-flex mt-5 mb-5 contato">
            <a href='/'><img src={require('../Imagens/onceicao.png').default} alt="" width="300" className='imagem-contato mr-5'/></a>
                <div className="p-3 border mt-3 menu bg-white ml-auto mr-auto ">
                    <div className="form-icon">
                        <span><RiContactsBookUploadLine/></span>
                    </div>
                <form action='' method='get' >
                    <div className="mb-1">
                        <label for="email" className="form-label text-dark font-weight-bold">EMAIL</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="mb-1">
                        <label for="senha" className="form-label text-dark font-weight-bold">EMAIL</label>
                        <input type="password" className="form-control" id="senha" name="senha" />
                    </div>
                    <div className="mb-1 d-flex">
                        <div className="form- text-dark font-weight-bold">
                            <label for="mensagem">MENSAGEM</label>
                            <textarea className="form-control" id="mensagem" name='mensagem' rows="5" cols="100"></textarea>
                        </div> 
                    </div>
                        <div className="ml-auto mt-2">
                            <button type="submit" className="btn botao text-white font-weight-bold">ENTRAR</button>
                        </div>  
                    </form>
                    
                </div>
            </div>
                <RodapeGeral/>
        </>
    )
}
export default Contato;