import React from 'react'

const Card = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='shadow-lg p-4 rounded-md min-h-30  bg-white min-w-[300px] max-w-md'>
        {children}
    </div>
  )
}

export default Card