// page.tsx
// This is the main homepage for Refurb Radar. It displays the hero (mission statement) and a grid of product cards for today's deals.

import Image from "next/image";
import HeroHeader from '../components/HeroHeader';
import ProductCard from '../components/ProductCard';

// Example product data for previewing the product grid
const sampleProducts = [
  {
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-2022?wid=940&hei=1112&fmt=png-alpha&.v=1660744846946',
    title: 'iPhone 14',
    price: 356,
    specs: '128 GB · Tmobile · Backmarket',
    highlight: false,
  },
  {
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-s918bzkgins/gallery/in-galaxy-s23-ultra-s918-sm-s918bzkgins-thumb-535642237',
    title: 'Samsung 25',
    price: 742,
    specs: '128 GB · Tmobile · Backmarket',
    highlight: true,
  },
  {
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-2022?wid=940&hei=1112&fmt=png-alpha&.v=1660744846946',
    title: 'iPhone 14',
    price: 356,
    specs: '128 GB · Tmobile · Backmarket',
    highlight: false,
  },
  {
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-s918bzkgins/gallery/in-galaxy-s23-ultra-s918-sm-s918bzkgins-thumb-535642237',
    title: 'Samsung 25',
    price: 742,
    specs: '128 GB · Tmobile · Backmarket',
    highlight: true,
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero section: mission statement and call to action */}
      <HeroHeader />
      {/* Product grid: today's deals */}
      <section style={{ background: '#f5f6f7', padding: '3rem 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: '#2F4858' }}>Today Deals</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {sampleProducts.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}
