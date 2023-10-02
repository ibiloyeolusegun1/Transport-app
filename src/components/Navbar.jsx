import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Set Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Use removeEventListener here
    };
  }, []);

  // Navitems Array
  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About Us', path: 'about' },
    { link: 'Services', path: 'services' },
    { link: 'Testimonials', path: 'testimonials' },
    { link: 'Contact Us', path: 'contact' },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav className={`py-4 lg:px-14 px-5 ${isSticky ? 'sticky top-0 left-0 right-0 border-b bg-white duration-300' : ''}`}>
        <div className='flex items-center justify-between text-base gap-8'>

            <a href="https://example.com"> 
                <img src={logo} alt="" className="w-30 inline-block items-center" />
            </a>

            {/* Nav Items For Large Devices */}
            <ul className="md:flex space-x-12 hidden">
                {navItems.map(({ link, path }) => (
                <ScrollLink
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    key={path}
                    className="block text-base text-txtGrey900 hover:text-brandPrimary first:font-medium"
                >
                    {link}
                </ScrollLink>
                ))}
            </ul>

            {/* Button for large device */}
            <div className='space-x-12 hidden lg:flex items-center'>
                <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-mainDGrey'>Contact Us</button>
            </div>
            
            {/* Button for large device */}
            <div className='md:hidden '>
                <button 
                onClick={toggleMenu}
                className='text-mainDGrey focus:outline-none focus:text-grey-500'>
                    {
                        isMenuOpen ? (<FaXmark className='h-6 w-6'/>) : (<FaBars className='h-6 w-6'/>)
                    }
                </button>
            </div>

        </div>

        {/* Nav item for mobile device */}
        <div className={`space-y-4 px-4 mt-16 py-14 bg-brandPrimary ${ isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
            {navItems.map(({ link, path }) => (
                <ScrollLink
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    key={path}
                    className="block text-base text-txtGrey900 text-white hover:text-brandPrimary first:font-medium"
                >
                    {link}
                </ScrollLink>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
