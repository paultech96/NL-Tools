import Titulo from '../Titulo'
import Mensagem from '../Mensagem'
import Ferramenta from '../Ferramenta'

function Home() {
    const ferramentasDisponiveis = [
        { nome: 'Conversor de imagens', descricao: 'Converta entre .jpeg, .webp, etc.'},
        { nome: 'Removedor de fundos (BGR)', descricao: 'Remova fundos de imagens com IA' },
        { nome: 'Conversor de vídeo', descricao: 'Converta vídeos para vários formatos' }
    ]
    return (
        <div style={{ padding: '2rem'}}>
            <Titulo> Bem vindo ao <strong>NL Tools</strong></Titulo>
            <Mensagem
            titulo="Projeto MVP com foco em ferramentas úteis"
            descricao="Front-end em React com ajuda do ChatGPT"
            obs="const fullStack = {ME}"
            />
            {ferramentasDisponiveis.map((item, i) => (
                <Ferramenta key={i} nome={item.nome} descricao={item.descricao}/>
            ))}
        </div>
    )
}

export default Home