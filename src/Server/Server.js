const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(require('./Auth'))

app.listen(8000, () => {
    console.log("Server is Listening...");
})