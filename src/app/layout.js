import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'My Developer Portfolio',
  description: 'Portfolio of a Full Stack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
          <ul className="flex gap-6 justify-center text-lg font-medium">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
