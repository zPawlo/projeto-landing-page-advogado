import React from 'react'
import { diferenciais } from '../data/content'

export default function Diferenciais() {
  return (
    <section className="diferenciais">
      <p className="section-label">Por que me escolher</p>
      <h2>Meus <em>diferenciais</em></h2>

      <div className="dif-grid">
        {diferenciais.map((d) => (
          <div className="dif-item" key={d.num}>
            <span className="dif-num">{d.num}</span>
            <div>
              <h4>{d.title}</h4>
              <p>{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
