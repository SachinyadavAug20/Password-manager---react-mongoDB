import express from 'express'
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import cors from "cors"

dotenv.config()
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
await client.connect();
    const dbName = 'Passly';

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors())

//GET all passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('Password');
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
})

//SAVE a passwords
app.post('/', async (req, res) => {
    const password=req.body
    const db = client.db(dbName);
    const collection = db.collection('Password');
    const findResult = await collection.insertOne(password);
    res.send({Sucess:true,result:findResult})
})

//DELETE a password
app.delete('/', async (req, res) => {
    const password=req.body
    const db = client.db(dbName);
    const collection = db.collection('Password');
    const findResult = await collection.deleteOne(password);
    res.send({Sucess:true,result:findResult})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

