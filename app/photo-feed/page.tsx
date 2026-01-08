import React from 'react'
import photos from './photo'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='container mx-auto px-4 py-20 '>
        <h1 className='text-4xl font-bold mb-8 text-center'>Photo Feed</h1>
        <p className='text-lg text-center'>Welcome to the photo feed! Here you can find a collection of beautiful images.</p>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
{
    photos.map((photo) => (
        <div key={photo.id} className='border rounded-lg overflow-hidden shadow-lg'>
            <Image src={photo.src} alt={photo.alt} className='w-full h-48 object-cover'/>
            <div className='p-4'>
                <h2 className='text-xl font-semibold'>{photo.name}</h2>
                <p className='text-gray-600'>{photo.description}</p>
            </div>
        </div>
    ))}
</div>
    </div>
  )
}

export default Home