import React, { useState } from 'react'
import { contato, areas } from '../data/content'

export default function Contato() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', area: '', mensagem: '' })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (form.nome && form.email) setSent(true)
  }

  return (
    <section className="contato" id="contato">
      {/* Info lateral */}
      <div className="contato-info">
        <p className="section-label">Contato</p>
        <h2>Vamos conversar sobre <em>seu caso</em></h2>
        <p>{contato.consultaTexto}</p>

        <div className="contact-items">
          <div className="contact-item">
            <div className="contact-dot" />
            <div>
              <h5>WhatsApp</h5>
              <p>{contato.whatsapp}</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-dot" />
            <div>
              <h5>E-mail</h5>
              <p>{contato.email}</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-dot" />
            <div>
              <h5>Localização</h5>
              <p>{contato.localizacao}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulário / Confirmação */}
      <div>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>
              Mensagem enviada!
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              Entrarei em contato em até 24 horas.
            </p>
          </div>
        ) : (
          <div className="contato-form">
            <div className="form-group">
              <label>Seu nome</label>
              <input
                type="text"
                name="nome"
                placeholder="Nome completo"
                value={form.nome}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>E-mail ou WhatsApp</label>
              <input
                type="text"
                name="email"
                placeholder="(11) 9 0000-0000 ou email@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Área jurídica</label>
              <select name="area" value={form.area} onChange={handleChange}>
                <option value="">Selecione...</option>
                {areas.map((a) => (
                  <option key={a.title}>{a.title}</option>
                ))}
                <option>Outra</option>
              </select>
            </div>

            <div className="form-group">
              <label>Descreva sua situação</label>
              <textarea
                name="mensagem"
                placeholder="Conte brevemente o que está acontecendo..."
                value={form.mensagem}
                onChange={handleChange}
              />
            </div>

            <button className="btn-primary" onClick={handleSubmit}>
              Solicitar Consulta Gratuita
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
