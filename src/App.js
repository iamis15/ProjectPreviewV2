import React from 'react'
import Cart from "./images/icon-cart.svg"

export default function App() {
  return (
    <main className='card'>
      
      <section className='image' />

      <section className='container'>
        <h4>P E R F U M E</h4>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

        <section className='price'>
          <h1>$149.99</h1>
          <h5>$169.99</h5>
        </section>

        <button className='cartbtn'><img src={Cart}/> Add to Cart</button>
        
      </section>
    </main>
  )
}
