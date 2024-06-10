import Link from "next/link"

export function Footer(){
    return (
        <>
         <footer className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="text-sm text-gray-500 dark:text-gray-400">&copy; 2024 FloLocs. All rights reserved.</div>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            prefetch={false}
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </footer>
    </>
        )
}