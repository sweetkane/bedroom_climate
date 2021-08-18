import express from 'express';
import knex from 'knex';
import cors from 'cors';

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'shaloctrev8',
      database : 'pp1db'
    }
  });

const app = express();
app.use(express.json());
app.use(cors());
// --------------------- setup --------------------- //


app.get('/', (req, res)=> {
    console.log(req.headers);
    const { type } = req.headers;
    console.log(type);
    db.select('*').from(type + "climate")
    .orderBy("timestamp","desc").limit(1)
    .then(row => {
        res.send(row[0]);
    });
}) 

app.post('/', (req, res)=> {
    console.log("req body", req.body);
    const { Type, Temperature, Humidity } = req.body;
    db(Type + 'climate').insert({
        temperature: Temperature,
        humidity: Humidity,
        timestamp: new Date()
    }).then(console.log)
    res.send("post successful");
})


app.listen(3001, ()=> {
    console.log("server running, port 3001");
})