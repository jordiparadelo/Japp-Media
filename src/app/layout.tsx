import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/components/layouts";
import "@/styles/globals.css";
import { Layout } from "@/components/ui";
import { defaultConfig } from "@/data/seo";


export const metadata = {
	...defaultConfig
};

const font = Inter({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-heading",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<Navbar />
				<Layout>{children}</Layout>
				<Footer />
			</body>
		</html>
	);
}
