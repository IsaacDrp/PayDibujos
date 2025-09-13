import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pay Dibujos",
  description: "Landing page de Pay Dibujos con estilo pastel en Tailwind CSS, optimizada para 16:9",
  openGraph: {
    title: "Pay Dibujos",
    description: "Artista digital e ilustradora",
    url: "https://ejemplo.local/",
    images: ["/principal.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body className="bg-white text-gray-800 antialiased w-screen h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
