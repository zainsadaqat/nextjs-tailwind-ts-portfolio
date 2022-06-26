import React from 'react';
import Hamburger from '../styles/assets/images/hamburger-svg-icon.svg';
import CustomImage from './CustomImage';

interface HamburgerIconI {
  setHidden: Function;
  hidden: boolean;
}

const HamburgerIcon = ({ setHidden, hidden }: HamburgerIconI) => (
  <button
    onClick={() => setHidden(!hidden)}
    className="flex flex-col space-y-6 md:hidden hover:rotate-180"
  >
    <CustomImage
      className=""
      src={Hamburger}
      width={30}
      height={20}
      alt="Hamburger Icon"
    />
  </button>
);

export default HamburgerIcon;
