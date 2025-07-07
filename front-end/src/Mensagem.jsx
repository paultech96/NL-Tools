function Mensagem(props) {
return(
    <div style={{ marginBottom: '1.5rem'}}>
        <h2 style={{ color: '#333'}}>{props.titulo}</h2>
        <p style={{ color: '#666'}}>{props.descricao}</p>
        {props.obs && 
        (
        <p style={{ color: '#666', fontSize:'0.45rem'}}>{props.obs}</p>
        )}
    </div>
)
}

export default Mensagem