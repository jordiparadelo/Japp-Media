import React, { createContext, useState, useContext } from "react";
import { usePathname } from "next/navigation";

interface NavbarContextType {
	isMenuOpen: boolean;
	toggleMenu: () => void;
	pathname: string;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<NavbarContext.Provider value={{ isMenuOpen, toggleMenu, pathname }}>
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
