import React from 'react'
import './styles/global.css'

import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Sobre        from './components/Sobre'
import Atuacao      from './components/Atuacao'
import Diferenciais from './components/Diferenciais'
import Contato      from './components/Contato'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <hr className="gold-line" />

      <Sobre />
      <hr className="gold-line" />

      <Atuacao />
      <hr className="gold-line" />

      <Diferenciais />
      <hr className="gold-line" />

      <Contato />

      <Footer />
    </>
  )
}
