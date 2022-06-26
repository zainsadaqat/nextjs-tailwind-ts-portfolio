import React from 'react';
import Cross from '../styles/assets/images/cross-svg-icon.svg';
import CustomImage from './CustomImage';

interface CrossIconI {
  setHidden: Function;
  hidden: boolean;
}

const CrossIcon = ({ setHidden, hidden }: CrossIconI) => {
  return (
    <button className="md:hidden" onClick={() => setHidden(!hidden)}>
      <CustomImage
        className="hover:rotate-180"
        src={Cross}
        width={30}
        height={20}
        alt="Cross Icon"
      />
    </button>
  );
};

export default CrossIcon;
