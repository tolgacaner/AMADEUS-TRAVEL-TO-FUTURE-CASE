import React from 'react'
import { PiAirplaneInFlight } from 'react-icons/pi'
import { useSelector } from 'react-redux'

function ResultArea() {
  const {oneway,departureFlight,returnFlight} = useSelector((state) => state.flights)
  return (
    <div className='bg-amadeusorange h-12 md:h-full md:w-1/6 flex md:flex-col space-x-1 md:space-x-0 md:space-y-1 flex-none min-h-0 p-1 '>
      <div className='w-11/12  h-full md:w-full flex space-x-1 md:flex-col md:space-x-0 md:space-y-1'>
        {departureFlight&&(<div className='w-full h-full bg-amadeusblue relative flex justify-center items-center md:w-full'>
          <div className='absolute -top-1/2 left-1/4 h-1/2 w-1/2 bg-amadeusblue md:hidden'>
            <h6 className='text-white text-sm'>Departure</h6>
          </div>
          <div className='h-3/5 w-full  flex justify-center items-end space-x-4'>
            <h6 className='text-sm font-medium text-white'>SAW</h6>
            <PiAirplaneInFlight size={19} />
            <h6 className='text-sm font-medium text-white'>DLM</h6>
          </div>
        </div>)}
        {(!oneway&&returnFlight)&&(<div className='w-full h-full bg-amadeusblue relative flex justify-center items-center md:w-full'>
          <div className='absolute -top-1/2 left-1/4 h-1/2 w-1/2 bg-amadeusblue md:hidden'>
            <h6 className='text-white text-sm'>Return</h6>
          </div>
          <div className='h-3/5 w-full  flex justify-center items-end space-x-4'>
            <h6 className='text-sm font-medium text-white'>SAW</h6>
            <PiAirplaneInFlight size={19} />
            <h6 className='text-sm font-medium text-white'>DLM</h6>
          </div>
        </div>)}
      </div>
      <div className='w-1/12  h-full md:w-full md:h-16 flex-none bg-white'>

      </div>
    </div>
  )
}

export default ResultArea