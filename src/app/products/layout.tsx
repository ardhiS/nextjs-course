'use client';
import Link from 'next/link';
import ProductDetails from './[productId]/page';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Header for ProductDetails</h1>
      {children}
    </div>
  );
}
