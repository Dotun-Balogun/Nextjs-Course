import React from 'react'
import { PhotoType } from '../photo-feed/photo'
import Image from 'next/image'
 
type ModalProps = {
    photo: PhotoType
  // Define any props you want to pass to the Modal component
}
const Modal = ({ photo }: ModalProps) => {
  return (
    <div>
      <h2>{photo.name}</h2>
      <Image src={photo.src} alt={photo.alt} />
    </div>
  )
}


export default Modal