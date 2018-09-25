var express = require('express');
var body_parser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(body_parser.json());
app.use(cors());

var tasks = [];

// /api/tasks
app.get('/api/tasks', (req, res) => {
    if(tasks.length == 0){
        tasks.push({
        id: 1,
        title: 'Tarefa 1',
        description: 'Descrição da tarefa 1'
    });
    }
    res.status(200).send(tasks);
});

app.listen(3000, () =>{
    console.log('To no ar =D');
});