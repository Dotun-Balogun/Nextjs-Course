import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>  
      F2 page
      <div>
        <Link href={'/f2/f4'}>
        F4
        </Link>
        <br/>
         <Link href={'/f4'}>
        F5
        </Link>

      </div>

    </div>
  )
}

export default page