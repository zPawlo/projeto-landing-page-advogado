import React from 'react'
import { advogado } from '../data/content'

export default function Navbar() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav>
      <div className="nav-logo">
        {advogado.nomePrimeiro} <span>{advogado.nomeDestaque}</span>
      </div>

      <ul className="nav-links">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#atuacao">Atuação</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <button className="nav-cta" onClick={() => scrollTo('contato')}>
        Consulta Gratuita
      </button>
    </nav>
  )
}
