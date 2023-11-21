import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center p-10">Page not found</h1>
      <div className='text-center'>
        {/* <a href="/">Back to homepage</a> */}
        <Link
        to="/">
        back to homepage
        </Link>
      </div>
    </div>
  )
}
