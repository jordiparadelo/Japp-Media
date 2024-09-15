import { LINKS } from '@/libs/constants'
import Link from 'next/link'
import React from 'react'


export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <h1>Logo</h1>
        <ul className='flex flex-row gap-4'>
          {LINKS.map((link) => (
            <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
