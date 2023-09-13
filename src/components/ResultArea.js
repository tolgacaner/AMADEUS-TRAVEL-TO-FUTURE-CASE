import React from 'react'
import { PiAirplaneInFlight } from 'react-icons/pi'
import { useSelector } from 'react-redux'

function ResultArea() {
  const { oneway, departureFlight, returnFlight } = useSelector((state) => state.flights)
  return (
    <div className='bg-amadeusorange h-12 md:h-full md:w-1/6 flex md:flex-col space-x-1 md:space-x-0 md:space-y-1 flex-none min-h-0 p-1 '>
      <div className='w-11/12  h-full md:w-full flex space-x-1 md:flex-col md:space-x-0 md:space-y-1'>
        {departureFlight && (<div className='w-full h-full bg-amadeusblue relative flex justify-center items-center md:w-full'>
          <div className='absolute -top-1/2 left-1/4 h-1/2 w-1/2 bg-amadeusblue md:hidden'>
            <h6 className='text-white text-sm'>Departure</h6>
          </div>
          <div className='h-3/5 w-full  flex justify-center items-end space-x-4 md:h-full md:p-1 md:flex-col md:space-x-0'>
            <div className='md:hidden flex justify-around items-center space-x-4'>
              <h6 className='text-sm font-medium text-white'>{departureFlight.departure_airport_code}</h6>
              <PiAirplaneInFlight size={19} />
              <h6 className='text-sm font-medium text-white'>{departureFlight.arrival_airport_code}</h6>
            </div>
            <div className='h-full w-full hidden md:flex flex-col'>
              <div className='w-full h-full flex flex-col justify-start items-start'>
                <h6 className='text-xs font-medium text-amadeusorange'>Departure Airport</h6>
                <p className='text-xs text-white'>{departureFlight.departure_airport}</p>
              </div>
              <div className='w-full h-full flex flex-col justify-start items-start'>
                <h6 className='text-xs font-medium text-amadeusorange'>Arrival Airport</h6>
                <p className='text-xs text-white'>{departureFlight.arrival_airport}</p>
              </div>
              <div className='w-full h-full flex flex-col justify-start items-start'>
                <h6 className='text-xs font-medium text-amadeusorange'>Departure Date</h6>
                <p className='text-xs text-white'>{departureFlight.departure_date}</p>
              </div>
              <div className='w-full h-full flex flex-col justify-start items-start'>
                <h6 className='text-xs font-medium text-amadeusorange'>Departure Time</h6>
                <p className='text-xs text-white'>{departureFlight.departure_time}</p>
              </div>
              <div className='w-full h-full flex flex-col justify-start items-start'>
                <h6 className='text-xs font-medium text-amadeusorange'>Price</h6>
                <p className='text-xs text-white'>{departureFlight.price}</p>
              </div>
            </div>
          </div>
        </div>)}
        {(!oneway && returnFlight) && (<div className='w-full h-full bg-amadeusblue relative flex justify-center items-center md:w-full'>
          <div className='absolute -top-1/2 left-1/4 h-1/2 w-1/2 bg-amadeusblue md:hidden'>
            <h6 className='text-white text-sm'>Return</h6>
          </div>
          <div className='h-3/5 w-full  flex justify-center items-end space-x-4 md:h-full md:p-1 md:flex-col md:space-x-0'>
            <div className='md:hidden flex justify-around items-center space-x-4'>
              <h6 className='text-sm font-medium text-white'>{returnFlight.departure_airport_code}</h6>
              <PiAirplaneInFlight size={19} />
              <h6 className='text-sm font-medium text-white'>{returnFlight.arrival_airport_code}</h6>
            </div>
            <div className='h-full w-full hidden md:flex flex-col'>
              <div className='w-full h-full flex flex-col justify-start items-start'>
                <h6 className='text-xs font-medium text-amadeusorange'>Departure Airport</h6>
                <p className='text-xs text-white'>{returnFlight.departure_airport}</p>
              </div>
              <div className='w-full h-full flex flex-col justify-start items-start'>
                <h6 className='text-xs font-medium text-amadeusorange'>Arrival Airport</h6>
                <p className='text-xs text-white'>{returnFlight.arrival_airport}</p>
              </div>
              <div className='w-full h-full flex flex-col justify-start items-start'>
                <h6 className='text-xs font-medium text-amadeusorange'>Departure Date</h6>
                <p className='text-xs text-white'>{returnFlight.departure_date}</p>
              </div>
              <div className='w-full h-full flex flex-col justify-start items-start'>
                <h6 className='text-xs font-medium text-amadeusorange'>Departure Time</h6>
                <p className='text-xs text-white'>{returnFlight.departure_time}</p>
              </div>
              <div className='w-full h-full flex flex-col justify-start items-start'>
                <h6 className='text-xs font-medium text-amadeusorange'>Price</h6>
                <p className='text-xs text-white'>{returnFlight.price}</p>
              </div>
            </div>
          </div>
        </div>)}
      </div>
      <div className='w-1/12  h-full md:w-full md:h-16 flex-none bg-white'>

      </div>
    </div>
  )
}

export default ResultArea