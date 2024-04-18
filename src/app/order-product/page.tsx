'use client';

import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const handleClick = () => {
    console.log('Oke');
    router.push('/');
  };
  return (
    <div>
      <h1>order product</h1>
      <button onClick={handleClick}>order</button>
    </div>
  );
}

export default Page;
