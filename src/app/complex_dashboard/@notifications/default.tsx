import Card from '@/components/card';
import Link from 'next/link';
import React from 'react';
import Login from '../@login/page';

export default function Notifications() {
  const isLoggined = true;

  return isLoggined ? (
    <Card>
      <div>Notifications</div>
      <Link href='/complex_dashboard/archived'>Archived</Link>
    </Card>
  ) : (
    Login
  );
}
