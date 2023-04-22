'use client';
import { useRouter } from 'next/navigation';

export const GoBack = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <a onClick={handleGoBack} style={{ cursor: 'pointer' }}>
      ← Go back
    </a>
  );
};
