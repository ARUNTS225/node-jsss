const express = require("express")
const userRoutes = require('./Routes/client')
const app = express()
const PORT= process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/',userRoutes)
app.listen(PORT)











