import { Archivo, Roboto_Flex } from "next/font/google";
import { Footer, Navbar } from "@/components/layouts";
import { cn } from "@/libs/utils";
import "@/styles/globals.css";
import { Layout } from "@/components/ui";
import { defaultConfig } from "@/data/seo";


export const metadata = {
	...defaultConfig
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
		<html lang='en'>
			<body
				className={cn(
					font_heading.variable,
					font_body.variable,
					`bg-background text-white flex flex-col min-h-[100vh]`
				)}
			>
				<Navbar />
				<Layout>{children}</Layout>
				<Footer />
			</body>
		</html>
	);
}
