import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-6)', color: 'white', padding: '1rem', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Refurb Radar. All rights reserved.</p>
    </footer>
  );
} 