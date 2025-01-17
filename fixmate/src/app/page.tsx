import Link from 'next/link'
import React from 'react'

const Home = () => {
  console.log("do not push new home page in master before testing")
  return (
    <div className='bg-gray-900'>
      <main className='flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh'>
        <div className='flex flex-col gap-6 p-12 rounded-xl bg-gray-400 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl'>
          <h1 className='font-bold text-4xl'>Spidey&apos;s Computer <br />Repair Shop </h1>
          <address>
            10880, Malibu Point <br />
            Southern California 90265
          </address>
          <p>
            Open Daily: 9:00 am - 5:00 pm
          </p>
          <Link href="tel:123455" className='hover:underline'>12345678</Link>
        </div>
      </main>
    </div>
  )
}

export default Home
