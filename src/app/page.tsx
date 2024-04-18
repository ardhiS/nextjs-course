import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/blog'>Blog</Link>
      <br />
      <Link href='/products'>Products</Link>
      <Link href='/order-product'>Order Product</Link>
    </div>
  );
}
