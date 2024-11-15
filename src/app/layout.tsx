import { Archivo, Roboto_Flex } from "next/font/google";
import { Footer, Navbar } from "@/components/ui";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Main } from "@/components/ui";
import { defaultConfig } from "@/data/seo";

export const metadata = {
  ...defaultConfig,
};

export const font_heading = Archivo({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const font_body = Roboto_Flex({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          font_heading.variable,
          font_body.variable,
          `flex min-h-[100vh] flex-col bg-background`,
        )}
      >
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
