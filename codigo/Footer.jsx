import React from 'react'
import { advogado } from '../data/content'

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {advogado.nome}. Todos os direitos reservados.</p>
      <p className="footer-oab">{advogado.oab} — Advocacia ética e responsável</p>
    </footer>
  )
}
