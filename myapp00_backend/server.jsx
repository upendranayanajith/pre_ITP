const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');
const router = require('./router');



app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://upendra:20001019@cluster00.aab8kmq.mongodb.net/?retryWrites=true&w=majority"

const connect = async () => {
try{
await mongoose.connect(uri);
console.log("connected to mongodb");
}

catch(error){
console.log("error connecting to mongodb", error);
}
}

const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`);
});


app.use('/api', router);