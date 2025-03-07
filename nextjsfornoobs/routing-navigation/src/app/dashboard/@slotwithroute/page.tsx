import Link from 'next/link'
import React from 'react'

const Notifications = () => {
  return (
    <div className='flex-1'>
      <div>Notifications outside slot route</div>
      <Link href='/dashboard/notifications' className='bg-gray-500 py-2 px-3 rounded-md'>Old Notifications</Link>
    </div>
  )
}

export default Notifications
