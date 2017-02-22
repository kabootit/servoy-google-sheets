const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const google = require('googleapis')
const credentials = require('./credentials.json')

const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    [ 'https://www.googleapis.com/auth/spreadsheets' ],
    null
)

google.options({auth})

const sheets = google.sheets('v4')
const spreadsheetId = '1fvJsN2vBirAKI2gn6F6sX9Eab8uXk-QKFs-sjFJ0viM'

app.get('/', (req, res) => { 
    res.send("Hello World")
})

app.post('/animals', (req, res) => {
    sheets.spreadsheets.values.append({
        spreadsheetId: '1fvJsN2vBirAKI2gn6F6sX9Eab8uXk-QKFs-sjFJ0viM',
        range: 'animals!all',
        valueInputOption: 'USER_ENTERED',
        includeValuesInResponse: true,
        resource: {
            values: [[req.body.name, req.body.count]]
        }
    }, (err, results) => {
        res.send(results)
    })
})


app.get('/animals', (req, res) => {
    sheets.spreadsheets.values.get({
        spreadsheetId: '1fvJsN2vBirAKI2gn6F6sX9Eab8uXk-QKFs-sjFJ0viM',
        range: 'animals!all'
    }, (err, results) => {
        res.send(results.values.map( ([name, count]) =>({ name, count}) ))
    })
})


app.listen(4000)