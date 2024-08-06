import type { Metadata } from "next";
import { Inter, Saira_Stencil_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const sairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--sairaStencilOne",
});

export const metadata: Metadata = {
  title: "BullX Mini Game",
  description: "A mini-game for BullX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sairaStencilOne.variable} font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
