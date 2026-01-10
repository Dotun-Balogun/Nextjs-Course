import React from 'react'
import { PhotoType } from '../photo-feed/photo'
import Image from 'next/image'
 

const Modal = ({ children }: {children:React.ReactNode}) => {
  return (
    <div className='flex items-center justify-center shadow bg-opacity-50 '>
     {children}
  
    </div>
  )
}


export default Modal