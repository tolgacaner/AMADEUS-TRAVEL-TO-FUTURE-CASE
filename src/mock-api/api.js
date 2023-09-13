import { setupWorker, rest } from 'msw'
import { flights } from './mock-data'
const worker = setupWorker(
  rest.post(process.env.REACT_APP_API_URL + '/flights', (req, res, ctx) => {
    const item = req.body
    const filteredData = flights.filter((e) => (e.departure_airport_code + e.departure_airport).toLowerCase().includes(item))
    return res(
      ctx.status(200, 'Mocked status'),
      ctx.json({
        filteredData
      })
    )
  }),
)


worker.start()