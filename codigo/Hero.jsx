import React from 'react'
import { advogado } from '../data/content'

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow animate-fade">
          <span>{advogado.slogan}</span>
        </div>

        <h1 className="animate-fade-2">
          {advogado.nomePrimeiro}<br />
          <em>{advogado.nomeDestaque}</em>
        </h1>

        <p className="hero-title-sub animate-fade-2">
          Advogado — {advogado.oab}
        </p>

        <p className="hero-desc animate-fade-3">
          {advogado.descricao}
        </p>

        <div className="hero-actions animate-fade-4">
          <button className="btn-primary" onClick={() => scrollTo('contato')}>
            Falar com o Advogado
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('atuacao')}>
            Ver áreas de atuação
          </button>
        </div>
      </div>

      <div className="hero-photo animate-fade-3">
        <div className="photo-frame">
          <span className="photo-initials">MR</span>
          <div className="photo-badge">
            <p>Recém Formado</p>
            <p>Bacharel em Direito</p>
          </div>
        </div>
      </div>
    </section>
  )
}
