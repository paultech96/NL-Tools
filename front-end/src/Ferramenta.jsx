import { useState } from "react"

function Ferramenta(props) {
    const [acessado, setAcessado] = useState(false)
function handleClick() {
    setAcessado(true)
}
return (
    <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        backgroundColor: acessado ? '#e8f5e9' : '#f9f9f9',
        transition: '0.3s'
    }}>
        <h3>{props.nome}</h3>
        <p>{props.descricao}</p>
        <button
        onClick={handleClick}
        disabled={acessado}
        style={{
            padding: '0.5rem',
            backgroundColor: acessado ? '#4caf50' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: acessado ? 'default' : 'pointer'
        }}
        > 
        {acessado ? 'Acessado ✅' : 'Acessar'}
        </button>
    </div>
)
}

export default Ferramenta