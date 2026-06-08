import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProviders } from "@/Provider/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata = {
  title: "CareerFlow | Streamlining Hiring",
  description:
    "CareerFlow is a modern job platform connecting job seekers and recruiters.",
};
export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        <ThemeProviders> {children}</ThemeProviders>
      </body>
    </html>
  );
}
