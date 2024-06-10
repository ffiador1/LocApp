/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ewa1Nensv1e
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Archivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export function SelectService() {
  return (
    <>
    <div className="flex h-16 items-center justify-between px-6 border-b border-brown-200 dark:border-brown-700 bg-white dark:bg-brown-900">
      <Nav />
    </div>
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-[#8B4513]/20 to-[#D2B48C]/20 ">
      <h1 className="text-3xl font-bold mb-8">Book Your Hair Appointment</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Haircut</h2>
            <p className="text-gray-500 mb-4">Get a fresh, stylish haircut tailored to your preferences.</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">Duration:</span>
                30 mins{"\n"}
              </div>
              <div>
                <span className="font-bold">Price:</span>
                $25{"\n"}
              </div>
            </div>
          </div>
          <div className="bg-gray-900 text-white font-bold py-2 px-4 rounded-b-lg hover:bg-primary-dark transition-colors flex justify-end items-center dark:bg-gray-50">
            <button className="w-full">Book Now</button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Color Treatment</h2>
            <p className="text-gray-500 mb-4">Transform your look with a vibrant, long-lasting color treatment.</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">Duration:</span>
                1 hour{"\n"}
              </div>
              <div>
                <span className="font-bold">Price:</span>
                $80{"\n"}
              </div>
            </div>
          </div>
          <div className="bg-gray-900 text-white font-bold py-2 px-4 rounded-b-lg hover:bg-primary-dark transition-colors flex justify-end items-center dark:bg-gray-50">
            <button className="w-full">Book Now</button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Highlights</h2>
            <p className="text-gray-500 mb-4">Add dimension and depth to your hair with expertly applied highlights.</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">Duration:</span>
                1.5 hours{"\n"}
              </div>
              <div>
                <span className="font-bold">Price:</span>
                $100{"\n"}
              </div>
            </div>
          </div>
          <div className="bg-gray-900 text-white font-bold py-2 px-4 rounded-b-lg hover:bg-primary-dark transition-colors flex justify-end items-center dark:bg-gray-50">
            <button className="w-full">Book Now</button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Blowout</h2>
            <p className="text-gray-500 mb-4">
              Achieve salon-quality volume and shine with our professional blowout service.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">Duration:</span>
                45 mins{"\n"}
              </div>
              <div>
                <span className="font-bold">Price:</span>
                $40{"\n"}
              </div>
            </div>
          </div>
          <div className="bg-gray-900 text-white font-bold py-2 px-4 rounded-b-lg hover:bg-primary-dark transition-colors flex justify-end items-center dark:bg-gray-50">
            <button className="w-full">Book Now</button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Updo</h2>
            <p className="text-gray-500 mb-4">Elevate your look with a stylish, elegant updo for any occasion.</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">Duration:</span>
                1 hour{"\n"}
              </div>
              <div>
                <span className="font-bold">Price:</span>
                $60{"\n"}
              </div>
            </div>
          </div>
          <div className="bg-gray-900 text-white font-bold py-2 px-4 rounded-b-lg hover:bg-primary-dark transition-colors flex justify-end items-center dark:bg-gray-50">
            <button className="w-full">Book Now</button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Keratin Treatment</h2>
            <p className="text-gray-500 mb-4">
              Smooth and straighten your hair with our professional keratin treatment.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">Duration:</span>
                2 hours{"\n"}
              </div>
              <div>
                <span className="font-bold">Price:</span>
                $150{"\n"}
              </div>
            </div>
          </div>
          <div className="bg-gray-900 text-white font-bold py-2 px-4 rounded-b-lg hover:bg-primary-dark transition-colors flex justify-end items-center dark:bg-gray-50">
            <button className="w-full">Book Now</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  )
}
