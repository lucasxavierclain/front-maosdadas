

const Itens=(props)=>{
    
    return(
        <div>
           
            <h2>Produto</h2>
            <p>{props.categoria}</p>
            <p>{props.valor}</p>
            
            <p>{props.descricao}</p>
        </div>
    )
}
export default Itens;