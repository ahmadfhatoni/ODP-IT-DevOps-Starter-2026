const http = require('node:http');
const { handler } = require('./app');

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || '0.0.0.0';

const server = http.createServer(handler);
server.listen(port, host, () => {
  console.log(`[INFO] Server started on ${host}:${port}`);
  console.log(`[INFO] APP_ENV=${process.env.APP_ENV || 'development'}`);
});
