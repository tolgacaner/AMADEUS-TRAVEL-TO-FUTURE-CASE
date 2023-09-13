import React from 'react'
import ListItem from './ListItem'
import { useSelector } from 'react-redux'

function ListArea() {
  const {data,departureDate} = useSelector((state) => state.flights)
  return (
    <div className='flex flex-col h-full   w-full md:w-5/6  shadow-sm p-1 space-y-1 overflow-auto   '>
      {
          data.map((item)=>{
            if(departureDate === item.departure_date)
            return(
            <ListItem key={item.id} item={item}/>
            )
          })
      }     
    </div>
  )
}

export default ListArea