import React from 'react'

const wait = async()=>{
 return new Promise ((resolve)=>setTimeout(resolve,3000))
}

const Notifications = async() => {

  await wait()
  return (
    <div>Notifications</div>
  )
}

export default Notifications