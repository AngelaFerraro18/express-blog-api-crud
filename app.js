//importo express
const express = require('express');
//importo routers
const postsRouters = require('./routers/postsRouters.js');
const app = express();
const port = 3000;

//bacheca con i post
app.use('/posts', postsRouters);

app.listen(port, () =>{
    console.log(`Il server è in ascolto alla porta: ${port}.`);
})