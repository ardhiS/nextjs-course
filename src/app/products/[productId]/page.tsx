import { Metadata } from 'next';
import { title } from 'process';

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({ params }: Props) => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details about product {params.productId}</h1>;
}
