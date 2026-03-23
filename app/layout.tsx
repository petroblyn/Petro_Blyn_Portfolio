import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Petro Blyn | Software Engineer",
  description:
    "Software Engineer specializing in Java, Python and scalable web applications. Based in South Africa.",
  keywords: [
    "Petro Blyn",
    "Software Engineer",
    "Java Developer",
    "Python Developer",
    "Johannesburg Developer",
  ],
  openGraph: {
    title: "Petro Blyn Portfolio",
    description:
      "Building scalable applications with Java, Python & modern web technologies.",
    url: "https://yourdomain.com",
    siteName: "Petro Blyn Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white scroll-smooth">
        {children}
      </body>
    </html>
  );
}