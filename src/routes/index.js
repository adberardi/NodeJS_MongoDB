const express = require('express');
const router = express.Router();


/*  Author: Antonio Berardi
    referencia: https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
Fue necesario instalar e incluir body-parser.
    - Para instalarlo se requiere ejecutar el siguiente comando: npm i body-parser */
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

const Task = require('../models/task');


router.get('/',async (req,res) => {
    const tasks = await Task.find();
    console.log(tasks);
    //res.send("Hello world!");
    res.render('index',{
        tasks
    });
});

/* Se agrega como parámetro a urlEncodedParser */
router.post('/add',urlEncodedParser, async (req,res) => {
    const task = new Task(req.body);
    await task.save();
    //console.log(new Task(req.body));
    //console.log(req.body);
    //res.send('Recived!');
    res.redirect('/');
});

router.get('/done/:id',async (req,res) =>{
    const {id} = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    console.log(task);
    res.redirect('/');
});

router.get('/edit/:id',async(req,res) => {
    const {id} = req.params;
    const task = await Task.findById(id);
    res.render('edit',{
        task
    });
});

router.post('/edit/:id',async(req,res) => {
    const {id} = req.params;
    await Task.update({_id:id},req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req,res) => {
    //console.log(req.params);
    const {id} = req.params;
    await Task.remove({_id:id});
    res.redirect('/');
});


module.exports = router;