import express from 'express';
import cors from 'cors';
import discdata from './data/discs';

let app = express();
app.use(cors());
app.use(express.static('public'));

app.get('/', function(req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.status(200).contentType('application/json').send(discdata);
});

// start server, listening at port 4000
app.listen(4000, () => console.log('Listening on port 4000'));

