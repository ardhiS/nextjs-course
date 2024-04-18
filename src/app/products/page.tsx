import Link from 'next/link';
import React from 'react';

export default function Products() {
  const productId = 1000;
  return (
    <>
      <Link href='/'>
        <h1>Home</h1>
      </Link>
      <h1>Products Lists</h1>
      <h2>
        <Link href='/products/1'>Produtcs 1</Link>
      </h2>
      <h1>Products Lists</h1>
      <h2>
        <Link href='/products/2'>Produtcs 2</Link>
      </h2>
      <h1>Products Lists</h1>
      <h2>
        <Link href='/products/3'>Produtcs 3</Link>
      </h2>
      <h2>
        <Link href={`/products/${productId}`}>Produtcs {productId}</Link>
      </h2>
    </>
  );
}
