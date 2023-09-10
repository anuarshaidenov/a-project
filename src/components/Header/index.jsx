'use client';

import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [linkWithDropdownOpen, setLinkWithDropdownOpen] = useState(false);

  return (
    <header>
      <div className="flex border-b border-gray-50 relative">
        <div className="w-10 h-10 bg-yellow-400"></div>

        <button
          onClick={() => {
            setIsMenuOpen((state) => !state);
          }}
          className="md:hidden relative px-3 grow shrink-0 border-r border-gray-50"
        >
          <span>Menu</span>
        </button>

        <div className="hidden md:block grow shrink-0">
          <ul className="flex items-center h-full gap-4 px-10">
            <li>
              <Link href={'/'}>Dashboard</Link>
            </li>
            <li>
              <Link href={'/'}>Link</Link>
            </li>
            <button
              onClick={() => {
                setLinkWithDropdownOpen((state) => !state);
              }}
              className="relative"
            >
              <span>Link with Dropdown</span>
              {linkWithDropdownOpen && (
                <>
                  <div className="absolute left-0 top-full bg-blue-950 w-[300px]">
                    <ul className="flex flex-col items-start">
                      <li className="px-4 py-2">
                        <Link href={'/'}>Dashboard</Link>
                      </li>
                      <li className="px-4 py-2">
                        <Link href={'/'}>Mining</Link>
                      </li>
                      <li className="px-4 py-2">
                        <Link href={'/'}>Something</Link>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </button>
            <li>
              <Link href={'/'}>Link</Link>
            </li>
          </ul>
        </div>

        <div className="px-3 grid place-items-center border-r border-gray-50">
          <span>S</span>
        </div>
        <div className="px-3 grid place-items-center">
          <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
        </div>
        {isMenuOpen && (
          <>
            <div
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="fixed inset-0 md:hidden"
            ></div>
            <div className="absolute w-full left-0 top-full bg-blue-950 py-10">
              <ul className="flex flex-col items-start">
                <li className="px-4 py-2">
                  <Link href={'/'}>Dashboard</Link>
                </li>
                <li className="px-4 py-2">
                  <Link href={'/'}>Mining</Link>
                </li>
                <li className="px-4 py-2">
                  <Link href={'/'}>Something</Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
