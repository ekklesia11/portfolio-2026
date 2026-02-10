import type { Metadata } from "next";
import { Archivo, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const description =
  "To me, backend development is not just about writing efficient logic, it is about architecting a reliable backbone that protects the stories and data of the people who use it.";

export const metadata: Metadata = {
  title: "Daniel Park | Portfolio",
  description,
  openGraph: {
    title: "Daniel Park | Portfolio",
    description,
    type: "website",
    locale: "en_US",
    siteName: "Daniel Park",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Park | Portfolio",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
