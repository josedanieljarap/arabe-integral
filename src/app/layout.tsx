import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panadería Moisés",
  description: "Panes artesanales saludables y nutritivos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
