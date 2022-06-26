import React from 'react';
import Link from 'next/link';

interface MobileMenuItemsI {
  hidden: boolean;
}
const MobileMenuItems = ({ hidden }: MobileMenuItemsI) => {
  return (
    <>
      {hidden && (
        <div className="absolute top-[80px] right-0 bg-whiteColor md:hidden">
          <ul className="border min-w-[280px] px-4 py-2">
            <li className="border-b-[2px] py-3">
              <Link href="#home">
                <a className="text-blackColor">Home</a>
              </Link>
            </li>
            <li className="border-b-[2px] py-3">
              <Link href="#projects">
                <a>Projects</a>
              </Link>
            </li>
            <li className="border-b-[2px] py-3">
              <Link href="#testimonials">
                <a>Testimonials</a>
              </Link>
            </li>
            <li className="py-3">
              <Link href="#about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenuItems;
