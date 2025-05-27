import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import the wallet section with no SSR
const WalletSection = dynamic(
  () => import("../components/WalletSection"),
);

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      {/* Wallet connect buttons will be rendered by WalletSection */}
      <WalletSection />
      
      <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-[calc(100vh-32px)] sm:min-h-[calc(100vh-64px)] gap-16">
        <main className="flex flex-col gap-[32px] items-center sm:items-start">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Band4Band</h1>
          <h2 className="text-lg text-green-400">Wallet token balance comparison website</h2>
        </main>
        <footer className="flex gap-[24px] flex-wrap items-center justify-center">
          <p className="text-sm text-green-500/70">© 2025 Band4Band - Wallet Token Comparison</p>
        </footer>
      </div>
    </div>
  );
}
