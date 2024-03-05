import express from 'express'

const app = express()

const PORT = process.env.PORT ?? 3000

app.get('/employees', (req, res) => res.send('obteniendo empleados'))
app.post('/employees', (req, res) => res.send('creando empleados'))
app.put('/employees', (req, res) => res.send('actualizando empleados'))
app.delete('/employees', (req, res) => res.send('eliminando empleados'))

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})