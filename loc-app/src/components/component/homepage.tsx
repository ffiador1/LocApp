/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Y2h93H1dnNR
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

export function Homepage() {
  return (
    <>
      <header className="flex h-16 items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <nav className="flex items-center gap-6">
          <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
            <img  src="imgs/logo.png"className="w-6 h-6"></img>
            <span className="sr-only">Hair Salon</span>
          </Link>
          <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
            Appointments
          </Link>
          <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
            Services
          </Link>
          <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
            Stylists
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <section className="bg-gray-100 dark:bg-gray-800 py-8 md:py-12">
        <div className="container max-w-5xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Welcome to Hair Salon</h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
                Discover the ultimate hair transformation experience.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <Button className="w-full md:w-auto" variant="outline">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-2">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Welcome to Hair Salon</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      We are a premier hair salon dedicated to providing exceptional service and transformative hair
                      experiences. Our team of skilled stylists are passionate about helping you achieve your desired
                      look, whether it's a classic cut, vibrant color, or trendy style.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Book your appointment today and let us help you feel confident and beautiful. Our modern,
                      welcoming salon is the perfect place to relax and indulge in a little self-care. We look forward
                      to welcoming you and making your hair dreams a reality.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Book Appointment
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="text-sm text-gray-500 dark:text-gray-400">© 2024 Hair Salon. All rights reserved.</div>
        <nav className="flex items-center gap-4">
          <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
            Privacy
          </Link>
          <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
            Terms
          </Link>
          <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
            Contact
          </Link>
        </nav>
      </footer>
    </>
  )
}



