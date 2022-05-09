const http = require('http');
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  if (req.url === '/') {
    res.end('루트');
  } else if (req.url === '/login') {
    res.end('로그인');
  }
});

app.listen(3001, () => {
  console.log('http로 서버 가동');
});

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('루트');
// });

// app.get('/login', (req, res) => {
//   res.send('로그인');
// });

// app.listen(3000, () => {
//   console.log('서버 가동');
// });
