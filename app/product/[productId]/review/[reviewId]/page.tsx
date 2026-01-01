import React from 'react'
import { notFound } from 'next/navigation'



const getRandomInit =(count:number)=> {
  return Math.floor(Math.random()* count)
}
const productReview = async({params}:
    {params:Promise<{productId:string, reviewId:string}>}) => {
        const {productId, reviewId} = await params
        if(parseInt(reviewId)>1000){
             return notFound()
        }

        const random = getRandomInit(2)
        if(random   === 1){
          throw new Error('Error loading review')
        }
  return (
    <div>
   <h2>Review {reviewId} for product{productId}</h2>

    </div>
  )
}

export default productReview