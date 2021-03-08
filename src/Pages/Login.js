import Menu from "../Componentes/Menu/Menu"
import './Css/Login.css'
import React from 'react'
import RodapeGeral from "../Componentes/Rodape/RodapeGeral";
import {TiFlowChildren} from 'react-icons/ti';

const Login = () => {
    

    // puxar o bd e tentar validar
    const [action, setAction] = React.useState([]);
    
    const url = "http://localhost:3005/cadastrese";
    const [form, setForm] = React.useState({
        username: "",
        senha: ""
    });

    const [response, setResponse] = React.useState(null)

    function pegarInfo({ target }) {
        const { id, value } = target
        setForm({ ...form, [id]: value })
        console.log({ [id]: value });
    }
function verificar(){
    if(localStorage.getItem('key')) {
        window.location='/minhaconta'
    }
}
    function pegarDados(event) {
        event.preventDefault();
        fetch('http://localhost:3005/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //transforma em json para mandar pra api e api mandar pro banco
            body: JSON.stringify(form)
        }).then(res => res.json()).then((res) => {
            if(res.usuario){
                localStorage.setItem('key', true)
                localStorage.setItem('id', JSON.stringify(res.usuario))
                alert(res.message)

            }
            else{
                alert(res.message)
            }
        }).then(verificar)
        
    }
    
    
    return (
        <>
            <Menu/>
            
            <div className="container container-fluid  d-flex mt-5 mb-5  menu">
            <a href='/'><img src={require('../Imagens/imponente.png').default} alt="" width="300" className='imagem-contato mr-auto'/></a>
                <div className="p-3 border mt-3 menu bg-white mb-3 ml-auto mr-auto ">
                    <div className="form-icon">
                        <span><TiFlowChildren/></span>
                    </div>
                <form action='/login' method='post'onSubmit={pegarDados} >
                    <div className="mb-3">
                        <label for="email" className="form-label text-dark font-weight-bold">Username</label>
                        <input type='text' className="form-control" id="username" name="username" value={form.username} onChange={pegarInfo}/>
                    </div>
                    <div className="mb-3">
                        <label for="senha" className="form-label text-dark font-weight-bold">Senha</label>
                        <input type="password" className="form-control" id="senha" name="senha"value={form.senha} onChange={pegarInfo} />
                    </div>
                    <div className="mb-3 d-flex">
                        <div>
                            <a href="/esqueciminhasenha" className="nav-link text-dark btn font-weight-bold">Esqueci minha senha</a>
                            <a href="/cadastrese" className="nav-link text-dark btn font-weight-bold">Cadastre-se</a>
                        </div>
                        <div className="ml-auto mt-4">
                                <button type="submit"  className="btn botao text-white font-weight-bold">ENTRAR</button>
                        </div>   
                    </div>
                    </form>
                    
                </div>
            </div>
            <RodapeGeral/>
        </>
    )
}
export default Login;