import React from 'react'
import photos from '../photo'
import Image from 'next/image'

const DetailPhoto = ({params}:{params:{id:string}}) => {
  const photo = photos.find((p) => p.id === parseInt(params.id))
  if (!photo) return <div>Photo not found</div>
  return (
    <div className='container mx-auto px-4 py-20 flex flex-col items-center justify-center'>
{/* detail description */}
<div className='h-96 w-96 mb-6'>
<Image src={photo.src} alt={photo.alt} className='w-full h-auto ' />

</div>
      <h2 className='text-2xl font-bold mb-2'>{photo.name}</h2>
      <p className='text-gray-600'>{photo.description}</p>
    </div>
  )
}

export default DetailPhoto