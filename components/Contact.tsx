import React from 'react';
import Link from 'next/link';

const ContactButton = () => {
  return (
    <div className="hidden md:block">
      <Link href="#contact">
        <a className="px-12 py-3 text-white bg-primaryColor rounded-lg baseline hover:bg-darkPrimaryColor md:block">
          Contact
        </a>
      </Link>
    </div>
  );
};

export default ContactButton;
