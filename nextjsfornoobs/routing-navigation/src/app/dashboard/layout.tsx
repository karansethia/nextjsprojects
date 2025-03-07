import React from 'react'

type Props = {
  children: React.ReactNode,
  timeline: React.ReactNode,
  calendar: React.ReactNode,
  analytics: React.ReactNode,
  slotwithroute: React.ReactNode,
  login: React.ReactNode,
}

const DashLayout = ({children, timeline, calendar, analytics, slotwithroute, login}: Props) => {

  const isLoggedIn = false;

  return isLoggedIn ? (
    <div className='w-full flex p-4 gap-3 h-[100vh]'>
      <div className='flex flex-col gap-2 h-full w-1/3 bg-gray-800 p-4'>
        {timeline}
        {calendar}
        {analytics}
        {slotwithroute}
      </div>
      <div className='w-2/3 h-full bg-gray-800'>{children}</div>
    </div>
  ) : (
      <div>{login}</div>
  )
}

export default DashLayout
