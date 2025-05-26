'use client';

import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Image from 'next/image';
import { Button } from './ui/button';

export const WalletConnectButton: FC = () => {
  const { publicKey, wallet, disconnect } = useWallet();
  
  const shortenAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  if (publicKey) {
    return (
      <Button
        variant="outline"
        className="flex items-center gap-2 font-medium"
        onClick={disconnect}
      >
        {shortenAddress(publicKey.toBase58())}
      </Button>
    );
  }

  return <WalletMultiButton className="wallet-adapter-button" />;
};

export default WalletConnectButton;