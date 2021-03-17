import './IndexProdutos.css';
import React from 'react';
import { BsInfoCircleFill } from "react-icons/bs";
import Autenticacao from '../../Autenticacao';

const IndexProduto = (props)=>{

    function deletar(){
        alert("Deletado com sucesso!")
    }
    return(
        <>         
                    <div className="card">
                        {/* <div className="imgBox">
                            <img className="img-img" src={require(`../../Imagens/Produtos/${props.imagem}`).default} />
                        </div> */}
                        <div className="details">
                            <div className="text-content">
                                <h3 className="textH3">{props.produto}</h3>
                                <span className="text-muted">{props.categoria}</span>
                                <div className="price text-danger">${props.valor}</div>
                            </div>
                            <h4 className="textH4">Para mais informações, clique no círculo do card.</h4>

                            <div className='container container-fluid d-flex justify-content-around'>
                           

                        <button className="btnProduto" type="button">Contato</button>
                    </div>
                        </div>
                        <div className="description">
                            <div className="iconProdu"><BsInfoCircleFill/></div>
                            <div className="contents">
                                <h2 className="textH2">Descrição</h2>
                                <p>{props.descricao}</p><hr/>
                                <div className="textoProduto">
                                    <p className="d-flex m-2"><b>Email:</b>{props.email}</p>
                                    <p className="d-flex m-2"><b>Telefone:</b>{props.telefone}</p>
                                    <p className="d-flex m-2"><b>Nome:</b>{props.nome}</p>
                                    <p className="d-flex m-2"><b>Username:</b>{props.username}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        
        </>
    );
}

export default IndexProduto;