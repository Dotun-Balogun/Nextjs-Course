// intercepting route

import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
      <h1>F1 page</h1>  
    </div>
    <div>
      <Link href={'f1/f2'}>
        Go to F2
      </Link> 
      <br/>
      <Link href={'/f2'}>
        Go to F2
      </Link>
    </div>
  </div>
  )
}

export default page