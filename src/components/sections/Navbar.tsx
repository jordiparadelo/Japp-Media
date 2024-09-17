"use client";

import { LINKS, PERSONAL_INFO } from "@/libs/constants";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui";
import PhoneIcon from '@/assets/icons/phone.svg'
import { usePathname } from "next/navigation";


export default function Navbar() {
	const pathname = usePathname()
	return (
		<nav className='bg-white/10 backdrop-blur-sm sticky top-0 py-3'>
			<div className='container flex flex-row place-content-between place-items-center mx-auto'>
				<div className='flex flex-row gap-20'>
					<Link href='/'><h1>Logo</h1></Link>
					<ul className='flex flex-row gap-4'>
						{LINKS.map((link) => (
							<li key={link.label}>
								<Link href={link.href} className={pathname === link.href ? 'color-primary' : ''}>{link.label}</Link>
							</li>
						))}
					</ul>
				</div>
        <div className='flex flex-row place-items-center gap-8'>
          <a className='flex flex-row place-items-center gap-2 text-rg' href={`tel:${PERSONAL_INFO.phone}`}><PhoneIcon className='w-[1.25em] h-[1.25em]'/>{PERSONAL_INFO.phone}</a>
				<Button>Agenda una llamada</Button>
        </div>
			</div>
		</nav>
	);
}
