const express = require('express')
const { handle } = require('express/lib/application')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hell World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/hello', (req, res) => {
    const test = {
        message: 'Salut les noobs',
        nom: 'Elvis',
        age: 42,
        presence: false
    }
   return res.status(200).json(test)
})

app.get('/url', (req, res) =>{
    return res.status(200).json({
        message: req.query.essai
    })
})