// HeroHeader.tsx
// This component renders the main mission statement (hero) section for the homepage, centered and filling the viewport.

import React from 'react';

export default function HeroHeader() {
  return (
    // Main hero section container
    <section
      style={{
        background: '#182B2C', // updated background color
        color: '#fff',         // white text for contrast
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 1rem',
      }}
    >
      {/* Main headline */}
      <h2 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: '1.5rem', maxWidth: 700 }}>
        Discover the Best Refurbished Tech Deals
      </h2>
      {/* Mission statement paragraph */}
      <p style={{ fontSize: '1.25rem', maxWidth: 600, marginBottom: '2.5rem', color: '#e6f2f2' }}>
        At Refurb Radar, we simplify your search for high-quality refurbished electronics. Our mission is to help you save money while enjoying top-notch tech from trusted sellers.
      </p>
      {/* Call-to-action buttons */}
      <div>
        <button style={{
          background: '#3E6B78',
          color: '#fff',
          marginRight: '1rem',
          fontWeight: 600,
          border: 'none',
          borderRadius: '6px',
          padding: '0.7rem 1.7rem',
          fontSize: '1.1rem',
        }}>
          Search
        </button>
        <button className="secondary" style={{
          background: '#fff',
          color: '#3E6B78',
          fontWeight: 600,
          border: 'none',
          borderRadius: '6px',
          padding: '0.7rem 1.7rem',
          fontSize: '1.1rem',
        }}>
          Learn More
        </button>
      </div>
    </section>
  );
} 