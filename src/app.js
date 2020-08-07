const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

//importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('views engine','ejs');

//middlewares
app.use(morgan('dev'));

//routes
app.use('/',indexRoutes);
app.use(express.urlencoded({extended: false}));

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Servidor en escucha por el puerto ${app.get('port')}`);
});