const express = require('express');

const app = express();

app.get('/', (req,res) =>{
    const photo = {
        id: 1,
        name: "photo Name",
        description: "photo description"
    }
    res.send(photo);
})

const port = 5000;

app.listen(port , ()=>{
    console.log(`basladi ${port}`);
})