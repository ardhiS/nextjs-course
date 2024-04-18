import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    absolute: 'THIS IS MY BIOGRAPY',
  },
};

export default function About() {
  return <div>About Page</div>;
}
