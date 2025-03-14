import express from 'express'
import router from './router'
import cors from 'cors'
import { connectDB } from './config/db'
import { corsConfig } from './config/cors'

connectDB()

const app = express()

// Agregar cors por middleware global Use
app.use(cors(corsConfig))

// Leer datos de formularios
app.use(express.json())

app.use('/', router)

export default app
