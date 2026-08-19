const http = require('node:http');
const {handler} = require('./app');
const port = Number(process.env.PORT || 8080);
const host = process.env.HOST || '0.0.0.0';
http.createServer((req,res)=>handler(req,res).catch(err=>{
  console.error('[ERROR]',err);
  res.writeHead(500,{'content-type':'application/json'});
  res.end(JSON.stringify({error:'Internal Server Error'}));
})).listen(port,host,()=>console.log(`[INFO] JakOne mock started on ${host}:${port}`));
