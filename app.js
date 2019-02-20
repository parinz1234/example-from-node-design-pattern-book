const express = require('express')

const authControllerFactory = require('./lib/authController'); 
const authServiceFactory = require('./lib/authService');
const dbFactory = require('./lib/db');

const app = express()
app.use(express.json())

const db = dbFactory('example-db')
const authService = authServiceFactory(db, 'SHHH!')
const authController = authControllerFactory(authService)

app.post('/login', authController.login); 
app.get('/checkToken', authController.checkToken); 

app.listen(3000 , () => {
  console.log(`Server running on port 3000`)
})