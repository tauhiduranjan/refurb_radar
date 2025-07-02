// about/page.tsx
// This page provides information about Refurb Radar's mission and introduces the team.

import React from 'react';

export default function About() {
  return (
    <main style={{ background: '#f5f6f7', minHeight: '100vh', padding: '3rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Mission statement section */}
      <section style={{ maxWidth: 700, background: '#fff', borderRadius: '16px', boxShadow: '0 2px 8px rgba(47, 72, 88, 0.07)', padding: '2.5rem 2rem', marginBottom: '2.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.3rem', fontWeight: 700, color: '#2F4858', marginBottom: '1.2rem' }}>About Refurb Radar</h1>
        <p style={{ fontSize: '1.15rem', color: '#3E6B78', marginBottom: '1.5rem' }}>
          Refurb Radar is your go-to platform for finding the best deals on quality refurbished tech. We believe everyone deserves access to reliable devices without breaking the bank. Our platform brings together listings from trusted sellers, so you can compare prices, track deals, and shop with confidence—all in one place.
        </p>
        <p style={{ fontSize: '1.05rem', color: '#3E6B78' }}>
          Whether you're a student, a gamer, or just looking for a great deal, Refurb Radar is here to make your search simple, transparent, and rewarding. Join us in making refurbished shopping smarter and more accessible for everyone!
        </p>
      </section>
      {/* Team section */}
      <section style={{ maxWidth: 700, background: '#fff', borderRadius: '16px', boxShadow: '0 2px 8px rgba(47, 72, 88, 0.07)', padding: '2rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2F4858', marginBottom: '1rem' }}>Meet the Team</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#3E6B78', fontSize: '1.1rem' }}>
          <li style={{ marginBottom: '0.7rem' }}><strong>Rohin Kumar</strong> – MayoMan7</li>
          <li style={{ marginBottom: '0.7rem' }}><strong>Tauhidur Anjan</strong> – tauhiduranjan</li>
          <li><strong>Ziyao Zhu</strong> – zzhu4308</li>
        </ul>
      </section>
    </main>
  );
} 