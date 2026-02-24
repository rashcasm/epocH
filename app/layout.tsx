import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; // <-- Import the provider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "epoQ | Elite Technical Agency",
  description: "We don't just write code; we architect systems. Specialized engineering for scaling startups.",
  keywords: ["Software Agency", "Web Development", "Python Backtesting", "Rust Systems", "Solana dApps", "AI Agents", "Startup MVP"],
  openGraph: {
    title: "epoQ | Elite Technical Agency",
    description: "You scale the business. We build the engine. Specialized engineering for startups.",
    url: "https://epoq.devs", // Replace with your actual domain later
    siteName: "epoQ",
    images: [
      {
        url: "/og-image.png", // We will add this image next
        width: 1200,
        height: 630,
        alt: "epoQ Agency Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "epoQ | Elite Technical Agency",
    description: "You scale the business. We build the engine.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Add suppressHydrationWarning here!
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}