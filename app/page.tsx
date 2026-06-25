import Link from "next/link";

type Product = {
  id: number;
  name: string;
  category: "Men" | "Women";
  price: number;
  rating: number;
  image: string;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Classic Linen Shirt",
    category: "Men",
    price: 49,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
    description: "Breathable linen shirt with a modern tailored fit."
  },
  {
    id: 2,
    name: "Slim Fit Denim Jacket",
    category: "Men",
    price: 79,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=900&q=80",
    description: "A timeless denim jacket designed for smart layering."
  },
  {
    id: 3,
    name: "Oversized Cotton Tee",
    category: "Men",
    price: 29,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80",
    description: "Soft premium cotton tee perfect for daily comfort."
  },
  {
    id: 4,
    name: "Floral Midi Dress",
    category: "Women",
    price: 69,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=900&q=80",
    description: "Lightweight flowing dress with elegant floral details."
  },
  {
    id: 5,
    name: "High-Waist Pleated Skirt",
    category: "Women",
    price: 55,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=900&q=80",
    description: "Chic pleated skirt crafted for effortless style."
  },
  {
    id: 6,
    name: "Tailored Blazer Set",
    category: "Women",
    price: 99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80",
    description: "Powerful silhouette with comfort stretch fabric."
  }
];

const menProducts = products.filter((product) => product.category === "Men");
const womenProducts = products.filter((product) => product.category === "Women");

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div
        className="product-image"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.18), rgba(0,0,0,0.06)), url(${product.image})`
        }}
      />
      <div className="product-content">
        <div className="product-top">
          <span className="badge">{product.category}</span>
          <span className="rating">{"\u2605"} {product.rating}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <strong>${product.price}</strong>
          <button type="button">Add to Cart</button>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Summer Collection 2026</p>
        <h1>Style That Fits Every Moment</h1>
        <p>
          Discover trending outfits for men and women. Curated picks, premium
          fabrics, and everyday comfort in one place.
        </p>
        <div className="hero-actions">
          <Link href="#shop" className="primary-btn">
            Shop Now
          </Link>
          <Link href="#collections" className="secondary-btn">
            Explore Collections
          </Link>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>6+</h2>
          <p>Featured products</p>
        </div>
        <div>
          <h2>4.8</h2>
          <p>Average rating</p>
        </div>
        <div>
          <h2>24H</h2>
          <p>Fast dispatch</p>
        </div>
      </section>

      <section id="collections" className="collections">
        <h2>Shop by Category</h2>
        <div className="collection-grid">
          <article className="collection-card men">
            <h3>Men&apos;s Clothing</h3>
            <p>Streetwear to smart casual essentials designed for all-day wear.</p>
          </article>
          <article className="collection-card women">
            <h3>Women&apos;s Clothing</h3>
            <p>Elegant staples and trend-ready outfits for every occasion.</p>
          </article>
        </div>
      </section>

      <section id="shop" className="catalog">
        <div className="catalog-header">
          <h2>Men&apos;s Picks</h2>
          <Link href="/">View All</Link>
        </div>
        <div className="products-grid">
          {menProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="catalog">
        <div className="catalog-header">
          <h2>Women&apos;s Picks</h2>
          <Link href="/">View All</Link>
        </div>
        <div className="products-grid">
          {womenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
