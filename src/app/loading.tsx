'use client';

import PuffLoader from 'react-spinners/PuffLoader';

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <PuffLoader color="#0EA5E9" size={150} aria-label="loading spinner" />
      </div>
    </div>
  );
}
