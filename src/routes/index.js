const express = require('express');
const router = express.Router();


/*  Author: Antonio Berardi
    referencia: https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
Fue necesario instalar e incluir body-parser.
    - Para instalarlo se requiere ejecutar el siguiente comando: npm i body-parser */
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

const Task = require('../models/task');


router.get('/',(req,res) => {
    //res.send("Hello world!");
    res.render('index');
});

/* Se agrega como parámetro a urlEncodedParser */
router.post('/add',urlEncodedParser, (req,res) => {
    console.log(new Task(req.body));
    //console.log(req.body);
    res.send('Recived!');
})


module.exports = router;