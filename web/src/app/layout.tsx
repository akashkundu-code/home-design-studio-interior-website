import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { SITE } from "@/lib/data";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-display-loaded" });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-body-loaded" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono-loaded" });

export const metadata: Metadata = {
  title: `${SITE.name} — Interior Design & Execution in Kolkata`,
  description: "Full-service interior design studio in Kolkata. Concept, civil, electrical, joinery, and finishing under a single contract. Serving Kolkata, Hooghly, Howrah.",
  keywords: ["interior designer Kolkata", "home interior Kolkata", "modular kitchen Kolkata", "2 BHK interior", "3 BHK interior"],
  openGraph: {
    title: SITE.name,
    description: "From estimation to execution. Interior design and full execution in Kolkata.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} ${mono.variable}`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
