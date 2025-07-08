import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/clients/logo_without_name.png'


const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
    }


    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex flex-row justify-between items-center py-2">
                <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">


                    {/* <HashLink smooth to="/#hero"><h1 className="font-extrabold text-4xl text-blue-900">NexaQuark Consulting</h1></HashLink> */}
                    
                    {/* <HashLink smooth to="/#hero" className="flex items-center space-x-2">
                        <img src={logo} alt="NexaQuark Logo" className="h-20 w-auto" />
                        <h1 className="font-extrabold text-4xl text-blue-900">NexaQuark Consulting</h1>
                    </HashLink> */}
<HashLink
  smooth
  to="/#hero"
  className="group flex items-center space-x-4 transition-all duration-[1200ms] ease-in-out hover:opacity-90"
>
  <img
    src={logo}
    alt="NexaQuark Logo"
    className="h-14 w-14 sm:h-12 sm:w-12 object-contain transition-transform duration-[1200ms] ease-in-out group-hover:scale-110"
  />
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 transition-all duration-[1200ms] ease-in-out group-hover:scale-105">
    NexaQuark Consulting
  </h1>
</HashLink>



                </div>
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-blue-900" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen && (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            )}
                            {!isOpen && (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className='hidden space-x-6 lg:inline-block p-5'>
                        <NavLinks />
                    </div>

                    <div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${  isOpen ? "block" : "hidden" } `}>
                        <div className='flex flex-col space-y-6'>
                            <NavLinks />
                        </div>                                                
                    </div>

                </div>
            </div>
        </nav>
    )
    
}


export default NavBar;
