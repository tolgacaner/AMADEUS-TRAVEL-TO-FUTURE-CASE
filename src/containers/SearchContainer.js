import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { adddepartureDate, getFlights, onewayToggle } from '../redux/flight/flightSlice';


import AsyncSelect from 'react-select/async';


function SearchContainer() {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const [filterToggle, setFilterToggle] = useState(false)
    const dispatch = useDispatch()
    const dotArr = [1, 2, 3]
    const { data, oneway ,departureFlight} = useSelector((state) => state.flights)
    console.log(startDate)

    const customStyles = {

        dropdownIndicator: (provided) => ({
            ...provided,
            display: 'none',


        }),
        control: (provided, state) => ({
            ...provided,
            minHeight: '0px',
            padding: '0',
            width: '100%',
            borderRadius: '0px',
            textAlign: 'left',

        }),
        input: (provided) => ({
            ...provided,
            fontSize: '0.75rem',
            lineHeight: '0'
        }),
        placeholder: (provided) => ({
            ...provided,
            fontSize: '0.75rem',
            lineHeight: '0'
        }),
        container: (provided) => ({
            ...provided,
            width: '100%',
            height: '10',
        }),
        menu: (provided) => ({
            ...provided,
            padding: '0px',
        }),
        option: (provided, state) => ({
            ...provided,
            fontSize: '0.75rem',
            textAlign: 'left',
            backgroundColor: state.isFocused ? '#005eb7' : 'white',
            color: state.isFocused ? 'white' : 'black',

        }),

    };
    const loadOptions = async (e) => {

        dispatch(getFlights(e))
        const uniqueArray = data.filter((item, index, self) => {
            return self.findIndex((obj) => obj.departure_airport === item.departure_airport) === index;
        });
        const filteredArray = uniqueArray.filter((item) => item.departure_airport_code.concat(item.departure_airport).toLowerCase().includes(e))
        return filteredArray
    }

    function formatDate(dateString) {
        const dateObject = new Date(dateString);

        const day = String(dateObject.getDate()).padStart(2, '0');
        const month = String(dateObject.getMonth() + 1).padStart(2, '0')
        const year = dateObject.getFullYear();

        const formatedDate = `${day}/${month}/${year}`;
        dispatch(adddepartureDate(formatedDate))
    }

    return (
        <div className='h-28  flex flex-none space-x-1 shadow-sm relative'>
            <div className='h-full w-10/12 md:w-5/6 flex flex-col p-1'>
                <div className='flex-1 w-full  flex  space-x-1'>
                    <div className='w-1/2 h-full flex  flex-col items-start md:flex-row  md:items-center'>
                        <h7 className='text-xs  md:text-base md:w-20 flex-none text-left h-1/2 font-medium'>From</h7>
                        <AsyncSelect
                            styles={customStyles}
                            loadOptions={loadOptions}
                            getOptionLabel={e => e.departure_airport_code + ' ' + e.departure_airport}
                            getOptionValue={e => e.departure_airport_code + ' ' + e.departure_airport}
                        />
                    </div>
                    <div className='w-1/2 h-full flex  flex-col items-start md:flex-row  md:items-center'>
                        <h7 className='text-xs  md:text-base md:w-20 flex-none text-left h-1/2 font-medium'>To</h7>
                        <AsyncSelect
                            styles={customStyles}
                            loadOptions={loadOptions}
                            getOptionLabel={e => e.departure_airport}
                            getOptionValue={e => e.departure_airport}
                            cacheOptions
                            defaultOptions
                        />
                    </div>
                </div>
                <div className='flex-1 w-full  flex space-x-1'>
                    <div className='w-1/2 h-full flex  flex-col items-start md:flex-row  md:items-center'>
                        <h7 className='text-xs  md:text-base md:w-20 flex-none text-left h-1/2 font-medium'>Departure</h7>
                        <DatePicker value={departureFlight&&departureFlight.departure_date} selected={startDate} onChange={(date) => {formatDate(date); setStartDate(date)}} className=' w-full text-xs p-1 h-1/2 border-2' />
                    </div>
                    <div className='w-1/2 h-full flex  flex-col items-start md:flex-row  md:items-center'>
                        <h7 className='text-xs  md:text-base md:w-20 flex-none text-left h-1/2 font-medium'>Return</h7>
                        <DatePicker selected={startDate2} onChange={(date2) => setStartDate2(date2)} className=' w-full text-xs p-1 h-1/2  border-2' disabled={oneway ? true : false} />
                    </div>

                </div>
            </div>


            <div className='h-full w-2/12 md:w-1/6  flex-none flex flex-col space-y-1 '>
                <div className=' h-1/2 w-full  flex items-center p-1 flex-col md:flex-row flex-none space-y-1 md:space-y-0'>
                    <h7 className='text-xs  md:text-base md:w-20 flex-none text-left h-1/2 font-medium '>One Way</h7>
                    <input type='checkbox' className=' w-6 text-xs h-6  opacity-70' value={oneway} onClick={() => dispatch(onewayToggle())} />
                </div>
                <div className='h-1/2 flex space-x-2'>
                    <div className=' h-full w-1/2  flex items-center p-1 flex-none cursor-pointer space-x-3 shadow-sm transition-shadow duration-300 hover:shadow-xl flex-col md:flex-row ' onClick={() => setFilterToggle(!filterToggle)}>
                        <h7 className='text-xs  md:text-base  flex-none text-left h-1/2 font-medium'>Filter</h7>
                        <div className='h-5 w-5  flex flex-col relative transform scale-75 overflow-hidden'>
                            <div className={`h-0.5  bg-black absolute  transition-all duration-300 ${!filterToggle ? 'top-0' : 'top-2'} ${!filterToggle ? 'rotate-0' : 'rotate-45'} ${!filterToggle ? 'w-1' : 'w-5'}`}></div>
                            <div className={`h-0.5  bg-black absolute transition-all duration-300 ${!filterToggle ? 'w-3' : 'w-0'} top-2 `}></div>
                            <div className={`h-0.5 w-5 bg-black absolute transition-all duration-300 ${!filterToggle ? 'top-4' : 'top-2'} ${!filterToggle ? 'rotate-0' : '-rotate-45'}`}></div>

                        </div>
                    </div>
                    <div className=' h-full w-full   flex justify-center items-center shadow-sm cursor-pointer transition-shadow duration-300 hover:shadow-xl'>
                        <div className='h-5 w-5 bg-white flex relative justify-between items-center'>
                            {
                                dotArr.map((item, i) => {
                                    return (
                                        <div key={i}
                                            className={`w-1 h-1 bg-black animate-slideIn `}
                                            style={{ "--delay": i * 1 + "s" }}>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>



            <div className={`absolute bg-white ${!filterToggle ? 'h-0' : 'h-60'} w-full md:w-1/6   top-[calc(100%+0.25rem)]  right-0 overflow-hidden transition-all duration-300 flex flex-col space-y-1 shadow-sm z-30`}>
                <div className='w-full h-full p-1'>
                    <div className='flex flex-col items-start h-14'>
                        <h7 className='text-xs  md:text-base md:w-20 flex-none text-left h-1/2 font-medium '>Departure Time</h7>
                        <input className=' w-full text-xs h-1/2 border-2' />
                    </div>
                    <div className='flex flex-col items-start h-14'>
                        <h7 className='text-xs  md:text-base md:w-20 flex-none text-left h-1/2 font-medium'>Arrival Time</h7>
                        <input className=' w-full text-xs h-1/2 border-2' />
                    </div>
                    <div className='flex flex-col items-start h-14'>
                        <h7 className='text-xs  md:text-base md:w-20 flex-none text-left h-1/2 font-medium'>Flight Duration</h7>
                        <input className=' w-full text-xs h-1/2 border-2' />
                    </div>
                    <div className='flex flex-col items-start h-14'>
                        <h7 className='text-xs  md:text-base md:w-20 flex-none text-left h-1/2 font-medium'>Price</h7>
                        <input className=' w-full text-xs h-1/2 border-2' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchContainer