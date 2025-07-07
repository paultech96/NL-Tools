import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './Titulo'
import Mensagem from './Mensagem'
//import Contador from './Contador' //componente inativado apenas para fim de estudos
import Ferramenta from './Ferramenta'


function App() {
  const ferramentasDisponiveis = [
  {nome: 'Conversor de imagens',
    descricao: 'converter imagens entre diversos formatos (.jpeg, .webp, etc...) facilmente' },
  {nome: 'Removedor de fundos (BGR)',
    descricao: 'remova facilmente fundo de imagens de modo simples e rápido' },
  {nome: 'Conversor de vídeo',
    descricao: 'converter vídeos entre diversos formatos (.mp4, .wmv, etc...) facilmente' }
]

  return (
<div style={{padding: '2rem', fontFamily: 'Arial, sans-serif'}}>
<Titulo> Bem vindo ao projeto <strong> NL Tools  </strong> </Titulo>
<Mensagem
  titulo="Projeto MVP com foco em ferramentas e back-end"
  descricao="ChatGPT será utilizado como auxiliador nesse processo (Front-End)"
  obs="const fullStack={}"
  />
  {ferramentasDisponiveis.map((item, index) => (
  <Ferramenta
  key={index}
  nome={item.nome}
  descricao={item.descricao}
  />  
  ))}
 {/* <Contador /> */} {/* Inativado, apenas para fim de estudos de onClick e useState*/}
<p>Projeto será criado usando  <strong>React + Vite</strong>.</p>
</div>
  )
}

export default App