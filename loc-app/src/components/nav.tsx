import Link from "next/link"

export function Nav(){
    return (
        <>
         <nav className="flex items-center gap-6">
          <Link className="flex items-center gap-2 text-lg font-semibold" href="/">
            <img  src="imgs/logo.png" className="w-6 h-8"></img>
            <span className="sr-only">FloLocs</span>
            
          </Link>
          <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
            Appointments
          </Link>
          <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
            Services
          </Link>
          <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
            Prices
          </Link>
        </nav>
        </>
        )
}