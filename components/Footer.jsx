import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-line/70 dark:border-line/70 light:border-gray-300/70 py-10">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-sm text-paper dark:text-paper light:text-gray-900">© 2026 {profile.name}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-fog dark:text-fog light:text-gray-600">
          <a href="#top" className="transition-colors hover:text-paper dark:hover:text-paper light:hover:text-gray-900">Top</a>
          <a href="#about" className="transition-colors hover:text-paper dark:hover:text-paper light:hover:text-gray-900">About</a>
          <a href="#capabilities" className="transition-colors hover:text-paper dark:hover:text-paper light:hover:text-gray-900">Capabilities</a>
          <a href="#work" className="transition-colors hover:text-paper dark:hover:text-paper light:hover:text-gray-900">Projects</a>
          <a href="#contact" className="transition-colors hover:text-paper dark:hover:text-paper light:hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
