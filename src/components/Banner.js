import React from 'react'

function Banner() {
  return (
    <div className='h-16  w-full bg-amadeusblue flex-none color flex justify-between px-2  py-1  '>
      <h6 className='font-medium text-white text-xs text-left'>TRAVEL TO
        <br />
        <span className='text-base'>
          <span className='text-amadeusorange'>FUTURE </span>
          PROGRAM
        </span>
        <br/>
       <span className='text-xs'> Study case : Tolga CANER</span>
      </h6>
      <img src={'./amadeuslogo.png'} className='object-cover h-full '/>
    </div>
  )
}

export default Banner