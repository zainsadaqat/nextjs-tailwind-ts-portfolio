import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../styles/assets/images/Logo.svg';

const MyLogo = () => (
  <Link className="pt-1" href="#home">
    <a>
      <Image src={Logo} alt="Logo" width={80} height={80} />
    </a>
  </Link>
);

export default MyLogo;
