import React from 'react'

export default function Logo() {
  return (
    <div className="animate-in" style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '4rem'
    }}>
      <div className="pulse" style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
        transform: 'rotate(45deg)'
      }} />
      <h1 style={{
        fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
        fontWeight: 700,
        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      }}>
        Mutual Horizon
      </h1>
    </div>
  )
}
