import React from 'react'
import ListArea from '../components/ListArea'
import ResultArea from '../components/ResultArea'

function ContentContainer() {
  return (
    <div className='h-full  w-full flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1   min-h-0'>
        <ListArea/>
        <ResultArea/>
    </div>
  )
}

export default ContentContainer