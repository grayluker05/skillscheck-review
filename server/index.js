require('dotenv').config();
const express = require('express')
const massive = require('massive');
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
}).catch(err => console.log(err, `Can't connect to db`))

//endpoints
app.post('/api/products', ctrl.addProduct);
app.get('/api/products', ctrl.getProducts);

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))