import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL)

    const url = `${connection.host}:${connection.port}`
    console.log(colors.cyan.bold(`MongoDB Conectado en ${url}`))
  } catch (error) {
    console.log(colors.bgRed.white.bold(error.message))
    process.exit(1)
  }
}
