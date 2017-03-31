import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

      const port = 3000,
             app = express(),
             compiler = webpack(config);
/*eslint-disable no-console */

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo : true,
  publicPath : config.output.publicPath

}));

app.get('/', function(req,res){

  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req,res){

  res.json([
    {"id" : 1 , "name" : "Praveen", "email": "pravee@gmail.com"},
    {"id" : 2 , "name" : "Prashanth", "email": "prash@gmail.com"},
    {"id" : 3 , "name" : "Trishul", "email": "trishhh@gmail.com"}
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
