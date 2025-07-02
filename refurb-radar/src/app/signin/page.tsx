// signin/page.tsx
// This page provides a sign in form for existing users to log in to Refurb Radar.

import React from 'react';

export default function SignIn() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#f5f6f7',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Card container for the sign in form */}
      <div style={{
        background: '#fff',
        borderRadius: '18px',
        boxShadow: '0 2px 8px rgba(47, 72, 88, 0.10)',
        padding: '2.5rem 2rem',
        maxWidth: 400,
        width: '100%',
        textAlign: 'center',
        fontFamily: 'var(--font-signika), Arial, sans-serif',
      }}>
        {/* Heading */}
        <h1 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1.2rem', color: 'var(--color-5)', fontFamily: 'var(--font-fredoka), cursive' }}>
          Sign in to Refurb Radar
        </h1>
        {/* Sign in form */}
        <form>
          <input
            type="email"
            placeholder="Email Address"
            style={{
              width: '100%',
              padding: '0.8rem',
              marginBottom: '1rem',
              borderRadius: '8px',
              border: '1px solid var(--color-2)',
              fontSize: '1rem',
              fontFamily: 'var(--font-signika), Arial, sans-serif',
              color: '#2F4858',
              background: '#f5f6f7',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              width: '100%',
              padding: '0.8rem',
              marginBottom: '1.5rem',
              borderRadius: '8px',
              border: '1px solid var(--color-2)',
              fontSize: '1rem',
              fontFamily: 'var(--font-signika), Arial, sans-serif',
              color: '#2F4858',
              background: '#f5f6f7',
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              background: 'var(--color-5)',
              color: '#fff',
              fontWeight: 700,
              border: 'none',
              borderRadius: '8px',
              padding: '0.9rem',
              fontSize: '1.1rem',
              marginBottom: '1.2rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-signika), Arial, sans-serif',
              transition: 'background 0.2s',
            }}
          >
            Sign In
          </button>
        </form>
        {/* Social sign in options */}
        <div style={{ margin: '1.2rem 0', color: 'var(--color-4)' }}>or sign in with</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          <button style={{
            border: '1px solid var(--color-2)',
            borderRadius: '8px',
            padding: '0.7rem',
            background: '#fff',
            color: 'var(--color-6)',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-signika), Arial, sans-serif',
          }}>Google</button>
          <button style={{
            border: '1px solid var(--color-2)',
            borderRadius: '8px',
            padding: '0.7rem',
            background: '#fff',
            color: 'var(--color-6)',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-signika), Arial, sans-serif',
          }}>Twitter</button>
          <button style={{
            border: '1px solid var(--color-2)',
            borderRadius: '8px',
            padding: '0.7rem',
            background: '#fff',
            color: 'var(--color-6)',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-signika), Arial, sans-serif',
          }}>Facebook</button>
        </div>
        {/* Link to sign up page */}
        <div style={{ marginTop: '1.5rem', color: 'var(--color-4)', fontSize: '0.98rem' }}>
          Don&apos;t have an account? <a href="/signup" style={{ color: 'var(--color-5)', textDecoration: 'underline' }}>Sign up</a>
        </div>
      </div>
    </main>
  );
} 