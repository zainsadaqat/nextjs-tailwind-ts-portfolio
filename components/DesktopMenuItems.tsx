import React from 'react';
import DesktopSingleMenuItem from './DesktopSingleMenuItem';

const DesktopMenuItems = () => {
  return (
    <ul className="hidden items-center space-x-6 md:flex">
      <DesktopSingleMenuItem menuItem="Home" targetSection="#home" />
      <DesktopSingleMenuItem menuItem="Projects" targetSection="#projects" />
      <DesktopSingleMenuItem
        menuItem="Testimonials"
        targetSection="#testimonials"
      />
      <DesktopSingleMenuItem menuItem="About" targetSection="#about" />
    </ul>
  );
};

export default DesktopMenuItems;
