import React, { useState } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const emails = JSON.parse(localStorage.getItem('emails') || '[]')
    emails.push(email)
    localStorage.setItem('emails', JSON.stringify(emails))
    
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="animate-in" style={{
        color: 'var(--primary)',
        fontWeight: 500,
        padding: '1rem',
        borderRadius: '8px',
        background: 'rgba(0, 255, 204, 0.1)'
      }}>
        Thank you for joining us on this journey
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="animate-in" style={{
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(255, 255, 255, 0.05)',
          color: 'white',
          width: 'clamp(200px, 100%, 300px)'
        }}
      />
      <button 
        type="submit" 
        disabled={loading}
        className="gradient-bg"
        style={{
          padding: '0.75rem 2rem',
          borderRadius: '8px',
          color: 'black',
          fontWeight: 600,
          border: 'none',
          cursor: loading ? 'wait' : 'pointer',
          opacity: loading ? 0.8 : 1,
          transition: 'opacity 0.2s'
        }}
      >
        {loading ? 'Connecting...' : 'Stay Connected'}
      </button>
    </form>
  )
}
