import { StaticImageData } from "next/image";
import photo1 from '@/app/photo-feed/photos/img12-600x600.jpg'
import photo2 from '@/app/photo-feed/photos/img13-600x600.jpg'
import photo3 from '@/app/photo-feed/photos/img14-600x600.jpg'
import photo4 from '@/app/photo-feed/photos/img4-600x600.jpg'
import photo5 from '@/app/photo-feed/photos/img5-600x600.jpg'
import photo6 from '@/app/photo-feed/photos/img6-600x600.jpg'

type PhotoType =    {
    id:string|number;
    src:string|StaticImageData;
    alt:string;
    name?:string;
    description?:string;
}

const photos: PhotoType[] = [
  {
    id: 1,
    src: photo1,
    alt: "Beautiful Landscape 1",
    name: "Landscape 1",
    description: "Sample photo for landscape 1"
  },
  {
    id: 2,
    src: photo2,
    alt: "Beautiful Landscape 2",
    name: "Landscape 2",
    description: "Sample photo for landscape 2"
  },
  {
    id: 3,
    src: photo3,
    alt: "Beautiful Landscape 3",
    name: "Landscape 3",
    description: "Sample photo for landscape 3"
  },
  {
    id: 4,
    src: photo4,
    alt: "Beautiful Landscape 4",
    name: "Landscape 4",
    description: "Sample photo for landscape 4"
  },
  {
    id: 5,
    src: photo5,
    alt: "Beautiful Landscape 5",
    name: "Landscape 5",
    description: "Sample photo for landscape 5"
  },
  {
    id: 6,
    src: photo6,
    alt: "Beautiful Landscape 6",
    name: "Landscape 6",
    description: "Sample photo for landscape 6"
  }
];

export default photos;

