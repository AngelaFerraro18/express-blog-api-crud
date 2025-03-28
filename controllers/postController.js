//importo l'array di oggetti che è stato fornito
const posts = require('../data/posts.js');

//index
function index(req, res){
    res.json(posts);
}

//show
function show(req, res){
    let id = parseInt(req.params.id);
    let currentPost = posts.find(post => id === post.id);
    res.json(currentPost);
}

//store
function store(req, res){
    res.send('Creazione di un nuovo post');
}

//update
function update(req, res){
    res.send('Modifica totale del post' + req.params.id);
}

//modify
function modify(req, res){
    res.send('Modifica parziale del post' + req.params.id);
}

//destroy
function destroy(req, res){
    res.send('Eliminazione del post' + req.params.id);
}


//esporto
module.exports = { index, show, store, update, modify, destroy};