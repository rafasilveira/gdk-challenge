import { Db, MongoClient } from 'mongodb'

let uri = process.env.MONGODB_URI || '' // trick ts :(
let dbName = process.env.MONGODB_DB

let cachedClient: any = null
let cachedDb: any = null

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

if (!dbName) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local')
}

type IDatabaseConnection = {
  client: MongoClient
  db: Db
}
export const connectToDatabase = async (): Promise<IDatabaseConnection> => {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((client) => client)

  const db = await client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}
