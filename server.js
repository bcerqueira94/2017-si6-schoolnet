const express = require('express')
const app = express()
const path = require('path')
const port = 3000

//Express setup
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded ({ extended: false }))
app.use(express.static('public'))

//Templates
app.set('views', path.join(__dirname, 'public'))
app.set('view engine','ejs')

app.get('/', (request, response) => {
    response.render('index')
})

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})