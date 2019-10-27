import React from 'react'
import Card from '../card/Card'
import '../../App.scss'

function Calculator() {
  return (
    <div className="Calculator">
        <h1>Quanto vale meu carro?</h1>
        <p>Descubra aqui por quanto seu carro pode ser vendido.</p>
        <Card/>
        <small>Desenvolvido por Vinícius Rocha</small>
    </div>
  );
}

export default Calculator;
