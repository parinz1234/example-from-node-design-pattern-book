const express = require('express')
const authController = require('./lib/authController'); 

const app = express()
app.use(express.json())

app.post('/login', authController.login); 
app.get('/checkToken', authController.checkToken); 

app.listen(3000 , () => {
  console.log(`Server running on port 3000`)
})