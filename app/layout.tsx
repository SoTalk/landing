import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sotalk - Secure Messaging on Solana",
  description: "The first secure, privacy-focused messaging platform powered by Solana blockchain. Connect with wallet addresses, send encrypted messages, and transfer SOL seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
