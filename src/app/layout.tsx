import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edmond Ilbawi",
  description:
    "Computer science portfolio of Edmond Ilbawi, featuring academic software projects, technical skills, experience, and the 21% Loaded digital journal.",
  metadataBase: new URL("https://edmondilbawi.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
