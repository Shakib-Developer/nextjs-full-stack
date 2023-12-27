"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <section>
      <div className="container px-5 lg:px-0 mx-auto">
        <nav className="flex items-center py-6">
          <Link className="text-3xl font-semibold leading-none" href="/">
            <h3 className=" font-bold uppercase text-red-500">mega blog</h3>
          </Link>
          <div className="lg:hidden ml-auto">
            <button
              className="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex items-center space-x-12 ml-auto mr-12 ${isMobileMenuOpen ? 'hidden' : 'block'}">
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-red-400"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-red-400"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-red-400"
                href="/service"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-red-400"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-red-400"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="hidden lg:block ${isMobileMenuOpen ? 'hidden' : 'block'}">
            <Link
              href={"/login"}
              className="mr-2 inline-block px-4 py-3 text-xs text-red-600 hover:text-red-700 font-semibold leading-none border border-red-200 hover:border-red-300 rounded"
            >
              Log In
            </Link>
            <Link
              className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-red-600 hover:bg-red-700 text-white rounded"
              href="/sign-up"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="navbar-menu fixed top-0 right-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <button
              onClick={closeMobileMenu}
              className="w-auto absolute right-1 top-1 py-2 px-3 mb-2 text-xs text-gray-600 hover:text-gray-700 font-bold rounded-full border border-gray-200 hover:border-gray-300"
            >
              X
            </button>
            {/* Mobile menu content */}
            <ul>
              <li className="mb-1">
                <Link
                  className="text-center block p-4 text-sm text-gray-500 hover:bg-red-50 hover:text-red-600"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="text-center block p-4 text-sm text-gray-500 hover:bg-red-50 hover:text-red-600"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="text-center block p-4 text-sm text-gray-500 hover:bg-red-50 hover:text-red-600"
                  href="/service"
                >
                  Service
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="text-center block p-4 text-sm text-gray-500 hover:bg-red-50 hover:text-red-600"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="text-center block p-4 text-sm text-gray-500 hover:bg-red-50 hover:text-red-600"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-6 border-t border-gray-100">
              <Link
                className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-red-600 hover:bg-red-700 text-white rounded"
                href="/sign-up"
              >
                Sign Up
              </Link>
              <Link
                className="block px-4 py-3 mb-2 text-xs text-center text-red-600 hover:text-red-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
                href="/login"
              >
                Log In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </section>
  );
};

export default Header;
