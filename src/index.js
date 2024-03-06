import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

const PORT = process.env.PORT ?? 3000

app.use(express.json())

app.use(indexRoutes)

app.use('/api', employeesRoutes)


app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})