"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from 'usehooks-ts'

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
	const isMobile = useMediaQuery('(max-width: 768px)')

	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname, isMobile]);

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