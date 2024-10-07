import React, { createContext, useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavbarContextType {
	isMenuOpen: boolean;
	toggleMenu: () => void;
	pathname: string;
	setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	return (
		<NavbarContext.Provider value={{ isMenuOpen, toggleMenu, pathname, setIsMenuOpen }}>
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