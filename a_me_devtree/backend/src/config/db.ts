import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL)

    const url = `${connection.host}:${connection.port}`
    console.log(`MongoDB Conectado en ${url}`)
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}
