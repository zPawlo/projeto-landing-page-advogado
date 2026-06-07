import React from 'react'
import { advogado, stats } from '../data/content'

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-grid">
        <div className="sobre-text">
          <p className="section-label">Sobre mim</p>
          <h2>Direito como <em>vocação</em>, não profissão</h2>
          {advogado.sobre.map((paragrafo, i) => (
            <p key={i}>{paragrafo}</p>
          ))}
        </div>

        <div className="sobre-stats">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
