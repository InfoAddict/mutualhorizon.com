import React from 'react'
import Logo from './components/Logo'
import EmailForm from './components/EmailForm'

function App() {
  return (
    <main style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: 'clamp(2rem, 5vw, 4rem)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Logo />
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 className="animate-in" style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
          marginBottom: '2rem',
          lineHeight: 1.5,
          opacity: 0.9
        }}>
          Exploring the potential of a shared future where humanity converges towards a mutual horizon
        </h2>
        <EmailForm />
      </div>
    </main>
  )
}

export default App
