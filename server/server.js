import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//component
import Connection from './database/db.js';
import Routes from './routes/route.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/',Routes)

if(process.env.NODE_ENV ==='production')
{
    
    app.use(express.static('client/build'));
    
}

const port = process.env.PORT || 8000;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

Connection(username,password);
app.listen(port,()=> console.log(`Server is running successfully on PORT ${port}`))

