// ProductCard.tsx
// This component displays a single product card for a deal, including image, title, price, and specs. Used in product grids.

import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number | string;
  specs: string;
  highlight?: boolean;
}

export default function ProductCard({ image, title, price, specs, highlight = false }: ProductCardProps) {
  return (
    // Card container
    <div
      style={{
        background: highlight ? '#9EDBBB' : '#fff',
        borderRadius: '18px',
        boxShadow: '0 2px 8px rgba(47, 72, 88, 0.10)',
        padding: '1.2rem',
        width: 220,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1rem',
        border: highlight ? '4px solid #72B5AA' : '4px solid #9EDBBB',
        transition: 'background 0.2s, border 0.2s',
      }}
    >
      {/* Product image */}
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }} />
      {/* Product title and price */}
      <h3 style={{ fontWeight: 700, fontSize: '1.1rem', margin: '0.5rem 0', textAlign: 'center' }}>{title} <span style={{ fontWeight: 400 }}>&ndash; ${price}</span></h3>
      {/* Product specs */}
      <div style={{ fontSize: '0.95rem', color: highlight ? '#fff' : '#2F4858', marginBottom: '0.5rem', textAlign: 'center' }}>{specs}</div>
    </div>
  );
} 