import React from 'react';
import Link from 'next/link';

interface DesktopSingleMenuItemI {
  menuItem: string;
  targetSection: string;
}

const DesktopSingleMenuItem = ({
  menuItem,
  targetSection,
}: DesktopSingleMenuItemI) => (
  <li>
    <Link href={`${targetSection}`}>
      <a className="hover:text-primaryColor">{menuItem}</a>
    </Link>
  </li>
);

export default DesktopSingleMenuItem;
