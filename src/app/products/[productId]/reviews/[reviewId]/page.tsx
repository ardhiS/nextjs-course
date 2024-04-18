'use client';

import React from 'react';
import { notFound } from 'next/navigation';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.reviewId) > 10) {
    notFound();
  }
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error(`Error loading review `);
  }
  return (
    <>
      <h1>
        Review Detail Page wid ID: {params.reviewId} based on the product{' '}
        {params.productId}
      </h1>
    </>
  );
}
