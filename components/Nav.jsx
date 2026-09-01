'use client';

import Image from 'next/image';
import { profile } from '@/lib/data';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/40 bg-white dark:bg-[#08131d]/95 backdrop-blur-sm shadow-card-light dark:shadow-none">
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 md:px-10">
        <a href="#top" className="group flex items-center gap-3 transition-opacity hover:opacity-80">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-line/40 bg-surface-light dark:border-line/50 dark:bg-[#1d2d3c]">
            <Image
              src="/images/Formal.jpg"
              alt="Mick Daniel Morales"
              fill
              sizes="40px"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col leading-none">
            <p className="text-[14px] font-semibold text-paper-light dark:text-paper transition-colors group-hover:text-signal">
              Mick Daniel Q. Morales
            </p>
            <p className="mt-0.5 text-[12px] text-fog-light dark:text-fog">{profile.email}</p>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-light dark:bg-[#0d1b29] text-base text-fog-light dark:text-fog transition-colors hover:bg-gray-200 dark:hover:text-paper"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <a
            href="#contact"
            className="rounded-full bg-signal px-4 py-2 text-[14px] font-medium text-ink transition hover:bg-signal/90"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
