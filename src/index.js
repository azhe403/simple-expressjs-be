const express = require('express');
const app = express();
const portNumber = "4000"

const logging_mw = require('./middleware/logging')
const header_mw = require('./middleware/header')

app.use(logging_mw())
app.use(header_mw())

app.get('/', (req, res) => {
    res.json(
        {
            'responseCode': 200,
            'responseMessage': 'Hello World!'
        }
    )
})

app.get('/get-hello', (req, res) => {
    res.json({
        'responseCode': 200,
        'responseMessage': 'Hi from GET'
    })
})

app.post('/post-hello', (req, res) => {
    res.json({
        'responseCode': 200,
        'responseMessage': 'Hi from POST'
    })
})

app.listen(portNumber, () => {
    console.log(`Example app listening at http://localhost:${portNumber}`)
})
