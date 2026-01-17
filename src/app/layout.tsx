import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Import fonts
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display", // Define CSS variable
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GIM-VEA | Grace in Motion",
    template: "%s | GIM-VEA",
  },
  description: "Operations Partner för medvetna ledare och coacher. Struktur, flow och expansion för ditt företag.",
  keywords: ["operations partner", "virtuell assistent", "struktur", "flow", "coaching", "ledarskap", "Gran Canaria"],
  authors: [{ name: "Monika Björklund" }],
  creator: "Monika Björklund",
  metadataBase: new URL("https://gim-vea.com"),
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://gim-vea.com",
    siteName: "GIM-VEA",
    title: "GIM-VEA | Grace in Motion",
    description: "Operations Partner för medvetna ledare och coacher. Struktur, flow och expansion för ditt företag.",
    images: [
      {
        url: "/images/hero_background.jpg",
        width: 1200,
        height: 630,
        alt: "GIM-VEA - Grace in Motion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIM-VEA | Grace in Motion",
    description: "Operations Partner för medvetna ledare och coacher.",
    images: ["/images/hero_background.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <div className="mobile-bg" aria-hidden="true" />
        <div className="site-content">
          <Navbar />
          <main style={{ minHeight: '80vh' }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
