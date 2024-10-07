import React from 'react';
import Link from 'next/link';
import LogoIcon from '@/assets/logo-color.svg';
import LogoDefaultIcon from '@/assets/logo.svg';

interface LogoProps {
  href?: string;
  height?: number;
  variant?: 'color' | 'default';
}

const LOGO_VARIANTS = {
  color: LogoIcon,
  default: LogoDefaultIcon,
}

const Logo: React.FC<LogoProps> = ({ href = '/', height = 48, variant = 'color' }) => {
  return (
    <Link href={href} aria-label="Go to home page">
      <LogoInner height={height} variant={variant} />
    </Link>
  );
};

export default Logo;

function LogoInner({ height, variant }: { height: number, variant: 'color' | 'default' }) {
  const LogoIcon = LOGO_VARIANTS[variant];
  return (
    <LogoIcon height={height} />
  )
}
