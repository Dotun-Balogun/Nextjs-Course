import Card from '@/app/components/Card'
import React from 'react'

const wait = async()=>{
 return new Promise ((resolve)=>setTimeout(resolve,3000))
}

const ArchivedNotifications = async() => {

  await wait()
  return (
    <Card>ArchivedNotifications</Card>
  )
}

export default ArchivedNotifications