import React, { createContext, useState, useContext, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface NavbarContextType {
	isMenuOpen: boolean;
	toggleMenu: () => void;
	pathname: string;
	query: string;
	setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	const query = useSearchParams().get("modal");
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname, query]);

	return (
		<NavbarContext.Provider value={{ isMenuOpen, toggleMenu, pathname, setIsMenuOpen, query: query ?? "" }}>
			{children}
		</NavbarContext.Provider>
	);
};

export const useNavbar = () => {
	const context = useContext(NavbarContext);
	if (context === undefined) {
		throw new Error("useNavbar must be used within a NavbarProvider");
	}
	return context;
};
