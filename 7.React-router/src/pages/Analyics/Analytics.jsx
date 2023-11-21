import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Analytics() {
  return (
    <div className='bg-slate-400'>
      <div className='max-w-4xl mx-auto text-center pb-20'>
        <p className=' text-2xl pt-10 mb-6 '>Where is the company analytics</p>
        <p className='mb10'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex porro perferendis blanditiis iure ad, voluptatum quia nam earum sequi quam enim voluptates sapiente tempora ratione placeat? Aut vitae molestias iure.</p>
        <nav className='text-center'>
          <Link
            to="/analytics/development"
            className='mx-2 font-semibold text-lg'
          >Development</Link>
          <Link
            to="/analytics/cybersecurity"
            className='mx-2 font-semibold text-lg'>Cybersecurity</Link>
          <Link
            to="/analytics/uiux"
            className='mx-2 font-semibold text-lg'>UIUX</Link>
        </nav>
        <Outlet/>
      </div>
    </div>
  )
}
