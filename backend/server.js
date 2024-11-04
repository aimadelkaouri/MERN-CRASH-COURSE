// const express = require('express');

import express from 'express';

const app = express();


app.get("/products", (req, res) =>{
    res.send("hiii");
});


app.listen(5000, () =>{
    console.log('Server started at port 5000');
});