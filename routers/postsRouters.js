//importo express
const express = require('express');
const router = express.Router();

//index
router.get('/', (req, res) =>{
    res.send('Sono la lista dei post');
})

//show
router.get('/:id', (req, res) =>{
    res.send('Dettagli del post' + req.params.id);
})

//store
router.post('/', (req, res) =>{
    res.send('Creazione di un nuovo post');
})

//update
router.put('/:id', (req, res) =>{
    res.send('Modifica totale del post' + req.params.id);
})

//modify
router.patch('/:id', (req, res) =>{
    res.send('Modifica parziale del post' + req.params.id);
})

//destroy
router.delete('/:id', (req, res) =>{
    res.send('Eliminazione del post' + req.params.id);
})

//esporto
module.exports = router;