import React from 'react'
import {PiAirplaneInFlight,PiArrowArcRightBold,PiClockClockwiseLight} from "react-icons/pi";
import {useDispatch,useSelector } from 'react-redux';
import {adddepartureFlight, adddereturnFlight } from '../redux/flight/flightSlice';
function ListItem({ item }) {
  const {departureFlight, returnFlight } = useSelector((state) => state.flights)
  const dispatch = useDispatch()

  const add = () => {
    if (departureFlight) {
      dispatch(adddereturnFlight(item))
    } else {
      dispatch(adddepartureFlight(item))
    }
  }
  const check = ((departureFlight || returnFlight) && (departureFlight.id || returnFlight.id) === item.id ? true : false)
  return (
    <div className={`w-full h-24  flex-none rounded-md flex overflow-hidden bg-amadeusblue shadow-md ${check ? 'opacity-60' : 'opacity-100'}`}>
      <div className='w-3/4 h-full bg-white rounded-md flex flex-col relative p-1'>
        <div className='h-3/5 w-full  flex justify-center items-end space-x-4'>
          <h6 className='text-lg font-medium'>{item.departure_airport_code}</h6>
          <PiAirplaneInFlight size={19} />
          <h6 className='text-lg font-medium'>{item.arrival_airport_code}</h6>
        </div>
        <div className='h-2/5 w-full  flex flex-col'>
          <div className=' w-full h-1/2 flex justify-center items-center'>
            <h6 className='text-sm'>{item.departure_time}</h6>
            <PiArrowArcRightBold size={19} />
            <h6 className='text-sm'>{item.arrival_time}</h6>
          </div>
          <div className=' w-full h-1/2 flex justify-center items-center'>
            <PiClockClockwiseLight size={14} />
            <h6 className='text-xs'>{item.elapsed_time}</h6>
          </div>

        </div>
        <h6 className='absolute opacity-30 text-xs'>{item.departure_date}</h6>

      </div>
      <span className='w-0.5 h-full rounded-lg'></span>
      <div className='w-1/4 h-full bg-amadeusorange rounded-md flex justify-center items-center flex-col'>
        <h6 className='text-amadeusblue font-medium'>{item.price}</h6>
        <button className='h-1/3 w-3/4 bg-amadeusblue flex justify-center items-center cursor-pointer' onClick={add}>
          <h6 className='text-white font-medium text-sm'>ADD</h6>
        </button>

      </div>

    </div>
  )
}

export default ListItem