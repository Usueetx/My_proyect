const express = require('express')
const cors = require('cors')
const mongodb = require('mongodb')
const Dibujos = require('./routes/Dibujos')

const app = express()
const MongoClient = mongodb.MongoClient
app.use(cors())

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.listen(3001)

MongoClient.connect("mongodb://127.0.0.1/27017", (err, client)=>{
    if(err != undefined){
        console.log(err)
    } else{
        app.locals.db = client.db('urwlove')
        console.log('conectado');
    }
})



app.use('/Dibujos', Dibujos)

