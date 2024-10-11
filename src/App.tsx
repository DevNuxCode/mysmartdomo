import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Cart from './components/Cart'
import ProductPage from './components/ProductPage'
import { CartProvider } from './contexts/CartContext'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 relative">
              <Header setIsCartOpen={setIsCartOpen} />
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <Features />
                    <Products setIsCartOpen={setIsCartOpen} />
                    <Testimonials />
                  </>
                } />
                <Route path="/product/:id" element={<ProductPage setIsCartOpen={setIsCartOpen} />} />
              </Routes>
              <Footer />
              {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
            </div>
          </Router>
        </CartProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App