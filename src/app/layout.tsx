// app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`)
  ),
  title: "GeoCaQ",
  description:
    "Caqueta en Mapas, toda la infomacion geografica del depatamento del Caqueta",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "GeoCaQ",
    description:
      "Caqueta en Mapas, toda la infomacion geografica del depatamento del Caqueta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoCaQ",
    description:
      "Caqueta en Mapas, toda la infomacion geografica del depatamento del Caqueta",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <AdminPanelLayout>{children}</AdminPanelLayout>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
