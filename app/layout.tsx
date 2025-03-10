import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import AuthProvider from "./auth/AuthProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main style={{ padding: "10px" }}>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
