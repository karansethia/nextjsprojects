import Link from 'next/link'
import React from 'react'

const Notifications = () => {
  return (
    <>
      <div className='flex-1'>Notifications inside slot route</div>
      <Link href='/dashboard' className='bg-blue-500 py-2 px-3 rounded-md'>New Notifications</Link>
    </>
  )
}

export default Notifications
