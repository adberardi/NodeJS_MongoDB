const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

//importing routes
const indexRoutes = require('./routes/index');

//connecting to db
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log("Server connected"))
    .catch(err => console.log("Error al conectar: "+err));

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares
app.use(morgan('dev'));

//routes
app.use('/',indexRoutes);
app.use(express.urlencoded({extended: false}));

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Servidor en escucha por el puerto ${app.get('port')}`);
});