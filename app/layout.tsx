import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dictationdoggy.com"),
  title: "Dictation Doggy - AI Voice Transcription for Mac | Speech-to-Text",
  description: "Transform your voice into text instantly with Dictation Doggy. AI-powered transcription for writers, professionals, students & developers. Mac-only. Privacy-first.",
  keywords: ["voice transcription", "speech-to-text", "Mac dictation", "AI transcription", "voice typing", "dictation software"],
  authors: [{ name: "Dictation Doggy" }],
  openGraph: {
    title: "Dictation Doggy - AI Voice Transcription for Mac",
    description: "Transform your voice into text instantly with AI-powered transcription. Perfect for writers, professionals, students developers.",
    type: "website",
    url: "https://dictationdoggy.com",
    siteName: "Dictation Doggy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dictation Doggy Preview",
      },
    ],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Dictation Doggy",
  "operatingSystem": "macOS 12+",
  "applicationCategory": "ProductivityApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Transform your voice into text instantly with AI-powered transcription for Mac.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4Y2C7X5S6Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4Y2C7X5S6Z');
          `}
        </Script>
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
