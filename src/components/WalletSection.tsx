'use client';

import dynamic from 'next/dynamic';

// Dynamically import with no SSR
const WalletConnectButton = dynamic(
  () => import('./WalletConnectButton'),
  { ssr: false }
);

export function WalletSection() {
  return (
    <>
      {/* Mobile wallet button - top of screen */}
      <div className="sm:hidden flex justify-center w-full mb-4">
        <WalletConnectButton />
      </div>
      
      {/* Desktop wallet button - top right */}
      <div className="hidden sm:block absolute top-8 right-8">
        <WalletConnectButton />
      </div>
    </>
  );
}

export default WalletSection;