const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => response.send('Hi there!'))

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})