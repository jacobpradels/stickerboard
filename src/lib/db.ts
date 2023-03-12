import { MongoClient } from "mongodb"
import { DB_URI } from '$env/static/private';
const client = new MongoClient(DB_URI)
await client.connect()
export default client.db('thepub')

// Pubs collection
export const pubs = client.db('thepub').collection('pubs')
// Users collection
export const users = client.db('thepub').collection('users')