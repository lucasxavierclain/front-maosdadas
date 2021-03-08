import Menu from "../Componentes/Menu/Menu";
import './Css/Home.css';
import Rodape from '../Componentes/Rodape/Rodape'
function Home() {
    return (
        <>
            <Menu />
            <div className="corpo">



                <div className="container ">


                    <div className=' mt-5' id='sobreProjeto'>
                        <a ><img src={require('../Imagens/unidas.png').default} class="img-fluid" alt="Imagem responsiva" width="100%" /></a>
                        <div className='container container-fluid  justify-content-center align-items-center pt-5'>
                            <h4>Sobre o projeto</h4>
                            <p className="textoHome">De mãos dadas é um projeto de auxílio que disponibiliza ferramentas de networking e de holofote a um público vulnerável.

                            Nossa proposta é oferecer uma plataforma de divulgação para que mulheres periféricas, especialmente mães solo habitantes de comunidades, tenham onde publicar seus produtos e serviços. 

                            O app busca, sobretudo, dar visibilidade a essas pessoas, tendo em vista o constante apagamento que sofrem do governo, suas reformas trabalhistas e medidas de contenção à pandemia excludentes. Por outro lado, há também a sociedade e seu preconceito, o que gera mais estigma. 

                            Assim, entendemos que, enquanto essas mulheres não conseguirem sair da informalidade, precisam de um canal de comunicação que facilite a obtenção de renda.</p>
                        </div>
                    </div><hr className='divisoria'/>
                    <div className='mt-5' id='comoFunciona'>
                        <div className='container container-fluid  justify-content-center align-items-center pt-5'>
                            <h4>Como funciona</h4>
                            <p>Oferecemos essa ferramenta para que trabalhadoras autônomas possam ter uma presença online, oferecendo seus produtos e/ou serviços de forma centralizada e organizada. O cadastro é simples e requer poucos dados. não participamos da precificação, que fica por parte da própria usuária, nem exigimos porcentagens sobre os seus ganhos. 

                            As mulheres cadastradas na plataforma acessam o ambiente onde podem postar informações sobre seus produtos e serviços, disponibilizando uma maneira dos consumidores entrarem em contato com elas e assim fechar negócio!

                            Dessa forma, a divulgação dos produtos e serviços é facilitada e o alcance é maior, permitindo que o público vulnerável tenham uma ferramenta de trabalho para obter lucro.</p>
                        </div>
                        <a ><img src={require('../Imagens/favela.png').default} class="img-fluid" alt="Imagem responsiva" width="100%" /></a>
                    </div>
                    <hr className='divisoria'/>
                    <div className=' mt-5' id='paraQuem'>
                        <a ><img src={require('../Imagens/maos.png').default} class="img-fluid" alt="Imagem responsiva" width="100%" /></a>
                        <div className='container container-fluid  justify-content-center align-items-center pt-5'>
                            <h4 className="mt-5">Para quem é</h4>
                            <p className="mt-4">Mães solo negras das periferias brasileiras são o foco de nossa atividade, e isso se justifica: segundo a reportagem <a href="http://www.generonumero.media/retrato-das-maes-solo-na-pandemia/">generonumero.media/retrato-das-maes-solo-na-pandemia</a>, 61% das famílias monoparentais são chefiadas por mães solo negras. Como fica evidente, o racismo estrutural também apresenta consequências no âmbito da formação familiar. 

                            Além disso, conforme a mesma reportagem, parcelas dessas mães apresentam condições precárias de moradia e saneamento básico e ainda não têm acesso à internet.</p>
                        </div>

                    </div>
                </div>
            </div>


            <Rodape />
        </>
    );
}

export default Home;