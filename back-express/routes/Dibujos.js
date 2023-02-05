const express = require('express')

const router = express.Router()

router.get('/', (req, res) =>{
    let db = req.app.locals.db;
    db.collection('Dibujos').find().toArray((err, data)=>{
        if(err != undefined){
            res.send({msg: 'Error getting diseños'})
        } else{
            res.send(data)
        }
    })
})

router.get('/:Titulo', function(req, res){
    console.log(req.app.locals);
    req.app.locals.db.collection('Dibujos').find({Titulo: req.params.Titulo}).toArray(function(err, data){
        if(err !== undefined){
            console.log(err);
            res.send({mensaje: "error "+ err})
        } else {
            console.log(data)
            res.send(data)
        }
    });
})

router.post('/', (req, res) =>{
    console.log('llego');
    let db = req.app.locals.db;

    db.collection('Dibujos').insertOne(req.body, (err, data)=>{
        if(err != undefined){
            res.send({msg: 'Error posting diseños'})
        } else{
            res.send(data)
            //  {msg: 'diseño creado'})
        }
    })
})

// router.post('/', function(req, res){
//     req.app.locals.db.collection('musicales').insertOne(req.body, function(err, data){
//         if(err !== undefined){
//             console.log(err);
//             res.send({mensaje: "error "+ err})
//         } else {
//                 res.send(data);
//             }
           
        
//     })
// })


router.put('/:Titulo', function(req, res){
    console.log(req.body);
    req.app.locals.db.collection('Dibujos').updateOne({Titulo: req.params.Titulo}, {$set: {"Titulo":(req.body.Titulo)}}, function(err, data){
        if(err !== undefined){
            console.log(err);
            res.send({mensaje: "error "+ err})
        } else {
            res.send(data)
        }
    })
})

router.delete('/:Titulo', function(req, res){
    
    req.app.locals.db.collection('Dibujos').deleteOne({Titulo: req.params.Titulo}, function(err, data){
        if(err !== undefined){
            console.log(err);
            res.send({mensaje: "error "+ err})
        } else {
            res.send(data)
        }
    })
})

module.exports = router