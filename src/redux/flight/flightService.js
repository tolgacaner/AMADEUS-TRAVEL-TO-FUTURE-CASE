import axios from 'axios'

const getFlights = async (item)=>{
    const {data} = await axios.post(process.env.REACT_APP_API_URL+'/flights',item)
    return data.filteredData
}


const flightService = {
    getFlights
}


export default flightService