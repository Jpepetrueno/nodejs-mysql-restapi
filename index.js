import express from 'express'
import {pool} from './db.js'

const app = express()

const PORT = process.env.PORT ?? 3000

app.get('/ping', async (req, res) => {
  const [result] = await pool.query('SELECT "pong" as result')
  res.json(result[0])
})

app.get('/employees', (req, res) => res.send('obteniendo empleados'))

app.post('/employees', (req, res) => res.send('creando empleados'))

app.put('/employees', (req, res) => res.send('actualizando empleados'))

app.delete('/employees', (req, res) => res.send('eliminando empleados'))

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})