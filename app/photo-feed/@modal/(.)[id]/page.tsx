import Image from 'next/image'
import photos from '../../photo'
import { PhotoType } from '../../photo'
import Link from 'next/link'

const DetailPhoto = ({ params }: { params: { id: string } }) => {
  const photo: PhotoType | undefined = photos.find(
    (p) => p.id === Number(params.id)
  )

  if (!photo) {
    return <h1>Photo not found</h1>
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg relative max-w-md w-full">

        <Link
          href="/photo-feed"
          className="absolute top-2 right-3 text-xl"
        >
          ✕
        </Link>

        <div className="h-96 w-96 mb-6 mx-auto">
          <Image src={photo.src} alt={photo.alt} />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-center">
          {photo.name}
        </h2>

        <p className="text-gray-600 text-center">
          {photo.description}
        </p>
      </div>
    </div>
  )
}

export default DetailPhoto
