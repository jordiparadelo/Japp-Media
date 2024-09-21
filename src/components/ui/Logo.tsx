import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.scss';

interface LogoProps {
  href?: string;
}

const Logo: React.FC<LogoProps> = ({ href = '/' }) => {
  return (
    <Link href={href} className={styles.navbar_logo}>
      Logo
    </Link>
  );
};

export default Logo;