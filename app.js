const express = require('express');
const authRout = require('./routes/authRout')
const analiticsRout = require('./routes/analiticsRout')
const categoryRout = require('./routes/categoryRout')
const orderRout = require('./routes/orderRout')
const positionRout = require('./routes/positionRout')
const app = new express();

app.use('/api/auth', authRout)
app.use('/api/analitic', analiticsRout)
app.use('/api/categoty', categoryRout)
app.use('/api/order', orderRout)
app.use('/api/position', positionRout)


module.exports = app;