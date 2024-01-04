const express = require('express');

const app = express();

app.use(express.static('public'))

const PORT = process.env.PORT | 8000;

app.listen(PORT,()=>console.log('Server is listening on PORT '+PORT))