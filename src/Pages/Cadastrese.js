import Menu from "../Componentes/Menu/Menu";
import React from 'react';
import {BiBriefcase} from 'react-icons/bi';
import RodapeGeral from '../Componentes/Rodape/RodapeGeral';


const Cadastrese = () => {
    const url = "http://localhost:3005/cadastrese";
    const [form, setForm] = React.useState({
        
        username: "",
        nome: "",
        cpf: "",
        celular: "",
        email: "",
        senha: "",
        nis:""
    });

    const [response, setResponse] = React.useState(null)

    function pegarInfo({ target }) {
        const { id, value } = target
        setForm({ ...form, [id]: value })
        console.log({ [id]: value });
    }

    function pegarDados(event) {
        fetch('http://localhost:3005/cadastrese', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //transforma em json para mandar pra api e api mandar pro banco
            body: JSON.stringify(form)
        }).then((res) => {
            setResponse(res);
        })
    }

    const Enviar = () => {
        if (alert("Cadastro feito!")) {
            window.location.href='/login';
        }
    }

    return (
        <>
        
            <Menu/>
            <div className='container bgCadastrese'>
                <div class="registration-form mx-auto">
                    <form action="/login" className="form-group" onSubmit={pegarDados}>
                        <div className="form-icon">
                            <span><BiBriefcase/></span>
                        </div>
                        <div className="mb-3">
                            <label for="nome" className="form-label text-dark font-weight-bold">SEU USERNAME</label>
                            <input type="text" className="form-control" id="username" name="username" placeholder=" @Exemplo" value={form.username} onChange={pegarInfo} />
                        </div>
                        <div className="mb-3">
                            <label for="nome" className="form-label text-dark font-weight-bold">NOME</label>
                            <input type="text" className="form-control" id="nome" name="nome"  value={form.nome} onChange={pegarInfo} />
                        </div>
                        <div className="mb-3">
                            <label for="nome" className="form-label text-dark font-weight-bold">CPF</label>
                            <input type="number" className="form-control" id="cpf" name="cpf" value={form.cpf} onChange={pegarInfo} />
                        </div>
                        <div className="mb-3">
                            <label for="nome" className="form-label text-dark font-weight-bold">CELULAR</label>
                            <input type="text" className="form-control" id="celular" name="celular" value={form.celular} onChange={pegarInfo} />
                        </div>
                        <div className="mb-3">
                            <label for="nis" className="form-label text-dark font-weight-bold">NIS</label>
                            <input type="number" className="form-control" id="nis" name="nis" value={form.nis} onChange={pegarInfo} />
                        </div>
                        <div className="mb-3">
                            <label for="nome" className="form-label text-dark font-weight-bold">EMAIL</label>
                            <input type="text" className="form-control" id="email" name="email" value={form.email} onChange={pegarInfo} />
                        </div>
                        <div className="mb-3">
                            <label for="nome" className="form-label text-dark font-weight-bold">SENHA</label>
                            <input type="password" className="form-control" id="senha" name="senha" value={form.senha} onChange={pegarInfo} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-block create-account" onClick={Enviar}>Cadastrar</button>
                        </div>
                    </form>
                    <div className="social-media">    
                        {/* null */}  
                    </div>
                </div>
            </div>
            <RodapeGeral/>
        </>
    )
}
export default Cadastrese;