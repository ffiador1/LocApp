/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/9uDQn8sgIzo
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export function Time() {
  return (
    <>
    <div className="flex h-16 items-center justify-between px-6 border-b border-brown-200 dark:border-brown-700 bg-white dark:bg-brown-900">
      <Nav />
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-[#8B4513]/20 to-[#D2B48C]/20 ">
      <h1 className="text-3xl font-bold mb-8">Book Your Hair Appointment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Calendar className="rounded-lg border border-gray-200 dark:border-gray-800 dark:border-gray-800" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Available Time Slots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-gray-500 dark:text-gray-400">No available time slots for the selected date.</div>
          </div>
          <div className="mt-8">
            <Button className="w-full">Book Appointment</Button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  )
}
