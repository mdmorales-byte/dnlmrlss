import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300/70 dark:border-line/70 py-10">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-sm text-gray-900 dark:text-paper">© 2026 {profile.name}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-fog">
          <a href="#top" className="transition-colors hover:text-gray-900 dark:hover:text-paper">Top</a>
          <a href="#about" className="transition-colors hover:text-gray-900 dark:hover:text-paper">About</a>
          <a href="#capabilities" className="transition-colors hover:text-gray-900 dark:hover:text-paper">Capabilities</a>
          <a href="#work" className="transition-colors hover:text-gray-900 dark:hover:text-paper">Projects</a>
          <a href="#contact" className="transition-colors hover:text-gray-900 dark:hover:text-paper">Contact</a>
        </div>
      </div>
    </footer>
  );
}
