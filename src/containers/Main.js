import React from 'react'

function Main({ children }) {
    return (
        <div className=' h-screen flex justify-center p-1  '>
            <div className='w-full md:w-3/4 space-y-1  h-full flex flex-col '>
                {children}
            </div>
        </div>
    )
}

export default Main