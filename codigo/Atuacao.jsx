import React from 'react'
import { areas } from '../data/content'

export default function Atuacao() {
  return (
    <section className="atuacao" id="atuacao">
      <p className="section-label">Áreas de atuação</p>
      <h2>Como posso <em>ajudar</em> você</h2>

      <div className="areas-grid">
        {areas.map((a) => (
          <div className="area-card" key={a.title}>
            <div className="area-icon">{a.icon}</div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
            <span className="area-tag">{a.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
