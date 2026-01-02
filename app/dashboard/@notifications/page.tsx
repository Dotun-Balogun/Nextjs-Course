import Card from '@/app/components/Card'
import Link from 'next/link'
import React from 'react'

const wait = async()=>{
 return new Promise ((resolve)=>setTimeout(resolve,3000))
}

const Notifications = async() => {

  await wait()
  return (  
    <Card>
      Notification{' '}
      
      <Link href='/dashboard/archived' className='text-base
      text-blue-200'> Archived </Link>

    </Card>
  )
}

export default Notifications