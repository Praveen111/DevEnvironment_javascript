import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

      const port = 3000,
             app = express();
/*eslint-disable no-console */

app.use(compression());
app.use(express.static('dist'));
app.get('/', function(req,res){

  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req,res){

  res.json([
    {"id" : 1 , "firstName" : "Praveen", "lastname": "Saboji" ,"email": "pravee@gmail.com"},
    {"id" : 2 , "firstName" : "Prashanth", "lastname": "Saboji", "email": "prash@gmail.com"},
    {"id" : 3 , "firstName" : "Trishul", "lastname": "Saboji" ,"email": "trishhh@gmail.com"}
  ]);
});

app.listen(port,function(err){

  if(err){
    console.log(err);
  }

  else{
    console.log("Server running at port :" + port);
    open('http://localhost:'+port);
  }
});
