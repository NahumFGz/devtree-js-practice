import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async () => {
  try {
    const url = `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASS}@cluster0.d52ot.mongodb.net/linktree_node_typescript`
    const { connection } = await mongoose.connect(url)

    const url2 = `${connection.host}:${connection.port}`
    console.log(`MongoDB Conectado en ${url2}`)
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}
