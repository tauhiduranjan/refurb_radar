// Navbar.tsx
// This component renders the top navigation bar for Refurb Radar, including the logo, centered search bar, and navigation links/buttons.

import React from 'react';

export default function Navbar() {
  return (
    // Main navigation container
    <nav style={{
      background: '#13191b',
      color: 'white',
      padding: '0.75rem 2rem',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      fontSize: '1rem',
      minHeight: '48px',
    }}>
      {/* Logo: clicking navigates to homepage */}
      <a href="/" style={{ textDecoration: 'none', zIndex: 2 }}>
        <span style={{
          fontFamily: 'var(--font-fredoka), cursive',
          fontWeight: 700,
          fontSize: '1.5rem',
          letterSpacing: '0.02em',
          color: '#D5FFCA',
        }}>
          Logo
        </span>
      </a>
      {/* Centered Search Bar: allows users to search for products */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 400,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 1,
      }}>
        <input
          type="text"
          placeholder="Search for iPhone, MacBook, GPU..."
          style={{
            width: '100%',
            padding: '0.5rem 1.2rem',
            borderRadius: '8px',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            background: '#f5f6f7',
            color: '#2F4858',
            fontFamily: 'var(--font-signika), Arial, sans-serif',
            boxShadow: '0 1px 4px rgba(47, 72, 88, 0.07)',
          }}
        />
      </div>
      {/* Right side: navigation links and auth buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', marginLeft: 'auto', zIndex: 2 }}>
        {/* Placeholder links for future navigation */}
        <a href="#" style={{ fontWeight: 600, color: '#F5F6F7', textDecoration: 'none' }}>Tech Categories</a>
        <a href="#" style={{ fontWeight: 600, color: '#F5F6F7', textDecoration: 'none' }}>Price Alerts</a>
        <a href="/about" style={{ fontWeight: 600, color: '#F5F6F7', textDecoration: 'none' }}>About</a>
        {/* More Info dropdown placeholder */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
          <a href="#" style={{ fontWeight: 600, color: '#F5F6F7', textDecoration: 'none' }}>More Info</a>
          {/* Dropdown Arrow Icon */}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5L6 8L9 5" stroke="#9EDBBB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Auth buttons */}
        <a href="/signup" style={{ padding: '0.3rem 0.9rem', fontWeight: 600, fontSize: '1rem', background: '#D5FFCA', color: '#2F4858', borderRadius: '6px', textDecoration: 'none' }}>Sign Up</a>
        <a href="/signin" style={{ fontWeight: 600, color: '#F5F6F7', textDecoration: 'underline', fontSize: '1rem', marginLeft: '0.5rem' }}>Sign In</a>
      </div>
    </nav>
  );
} 