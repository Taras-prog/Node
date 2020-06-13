const express = require('express')
const app = express()

app.use(express.json)
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, (err)=> console.log(`Listen 3000...`))