import React from 'react'
import { LINKS, PERSONAL_INFO } from '@/libs/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
            <span className="font-bold mr-2">{PERSONAL_INFO.name}</span>
            <span className="hidden md:inline">|</span>
            <span className="block md:inline mt-2 md:mt-0 md:ml-2">{PERSONAL_INFO.email} | {PERSONAL_INFO.phone}</span>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0 text-center">
            {LINKS.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link href={link.href} className="hover:text-gray-300">{link.label}</Link>
                {index < LINKS.length - 1 && <span className="mx-2">|</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
            {PERSONAL_INFO.socials.map((social, index) => (
              <React.Fragment key={social.name}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">{social.name}</a>
                {index < PERSONAL_INFO.socials.length - 1 && <span className="mx-2">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
