import { Metadata } from "next";

export default Object.freeze({
  title: "Nadeem Ashraf | Software Engineer",
  openGraph: {
    title: "Nadeem Ashraf | Software Engineer",
    description: "Nadeem Ashraf | Software Engineer",
    url: "https://nadeemashraf.dev",
    siteName: "Nadeem Ashraf | Software Engineer",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadeem Ashraf | Software Engineer",
    description: "Nadeem Ashraf | Software Engineer",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description:
    "Portfolio of Nadeem Ashraf, a Software Engineer with a passion for building innovative solutions.",
}) as Metadata;
