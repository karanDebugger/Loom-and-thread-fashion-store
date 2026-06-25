# Loom & Thread 👕🛍️

A modern, responsive fashion eCommerce web application built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## 🚀 Features

* Browse men's and women's fashion products
* Filter products by category:

  * All
  * Women
  * Men
* Product detail pages with:

  * Size selection
  * Quantity selection
* Add products to cart
* Update cart item quantities
* Remove items from cart
* Checkout flow with order summary
* Order success confirmation page
* Persistent cart using localStorage
* Fully responsive design

---

## 🛠️ Tech Stack

* **Next.js 15 (App Router)**
* **React 19**
* **TypeScript**
* **Tailwind CSS v4**
* **ESLint**

---

## 📂 Project Structure

```bash
├── app/
│   ├── page.tsx
│   ├── cart/
│   ├── checkout/
│   └── products/[id]/
│
├── components/
│   ├── ProductCard.tsx
│   ├── Navbar.tsx
│   ├── CartItem.tsx
│   └── ...
│
├── context/
│   └── CartContext.tsx
│
├── lib/
│   ├── products.ts
│   └── types.ts
│
├── public/
├── next.config.ts
└── README.md
```

---

## 📄 Pages

### Home (`/`)

* Hero section
* Product categories
* Featured products

### Product Details (`/products/[id]`)

* Product information
* Size selection
* Quantity selection
* Add to cart functionality

### Cart (`/cart`)

* View cart items
* Update quantities
* Remove products
* View order subtotal

### Checkout (`/checkout`)

* Customer information form
* Order summary
* Place order action

### Order Success (`/checkout/success`)

* Order confirmation message
* Return to shopping

---

## 🛒 Cart Persistence

Cart data is stored in the browser's **localStorage**, allowing users to keep their cart contents even after refreshing the page.

---

## 📦 Product Data

This project uses **dummy/sample product data** stored locally within the application.

No external database is required.

---

## 🖼️ Images

Product images are loaded from **Unsplash** using Next.js Image Optimization.

The required image domains are configured in:

```ts
// next.config.ts
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
  ],
}
```

---

## 💳 Checkout

The checkout flow is for demonstration purposes only.

* No payment gateway integration
* No backend order processing
* No real transactions

---

## ⚙️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/loom-and-thread.git
```

### Navigate to the Project

```bash
cd loom-and-thread
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## 📸 Screenshots

Add screenshots of:

* Homepage
* Product Details Page
* Shopping Cart
* Checkout Page
* Order Success Page

---

## 📜 License

This project is intended for educational and portfolio purposes.

