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
    response.render('index', {student:null, submitted:false})
})

app.get('/status', (request, response) => {
    console.log('studentId' + request.query.studentId)
    response.render('index', { student:null, submitted:true })
})

app.get('/status', (request, response) => {
    response.json(request.query)
})

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})