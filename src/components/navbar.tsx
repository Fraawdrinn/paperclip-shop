import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="">
      <ul className="">
        <li>
          <Link href="/" className=''>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <input type="checkbox" role="button" aria-label="Display the menu" className="menu md:hidden" />
    </nav>
  );
};

export default Navbar;
