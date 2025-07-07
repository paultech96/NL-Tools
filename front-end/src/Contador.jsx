//componente inativo, apenas para fim de estudos
import { useState } from "react"

function Contador() {
    const [Cliques, SetCliques] = useState(0)
    const limite = 5
    const chegouNoLimite = Cliques  >= limite
    return (
        <div style={{ marginTop: '2rem' }}>
            <p>Você clicou <strong>{Cliques}</strong> vezes.</p>
            {chegouNoLimite && (
                <p style={{ color: 'red', fontWeight: 'bold'}}>
                    Limite atingido. Faça upgrade para continuar.
                </p>
            )
            }
            <button onClick={() => SetCliques(Cliques + 1)}
                disabled={chegouNoLimite}
                style={{
                    padding:'0.5rem 1rem',
                    cursor: chegouNoLimite ? 'not-allowed' : 'pointer'
                }}
                >
                Clique aqui!
            </button>
        </div>
    )
}

export default Contador