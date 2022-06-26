import React, { useState } from 'react';
import Link from 'next/link';
import ContactButton from '../../components/Contact';
import DesktopMenuItems from '../../components/DesktopMenuItems';
import MyLogo from '../../components/Logo';
import HamburgerIcon from '../../components/HamburgerIcon';
import CrossIcon from '../../components/CrossIcon';
import MobileMenuItems from '../../components/MobileMenuItems';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <header className="md:container mx-auto px-6">
      <nav className="relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <MyLogo />

          {/* Desktop Menu Items */}
          <DesktopMenuItems />

          {/* Contact Button */}
          <ContactButton />

          {/* Hamburger Icon */}
          {!hidden && <HamburgerIcon setHidden={setHidden} hidden={hidden} />}

          {/* Cross Icon */}
          {hidden && <CrossIcon setHidden={setHidden} hidden={hidden} />}

          {/* Mobile Menu */}
          <MobileMenuItems hidden={hidden} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
