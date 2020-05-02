const http = require('http'); // library http is required for the js object http

// Notice : there a tons of libraries that can be loaded with npm

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>That is a great app running on PaaS Heroku</h1>');
});

server.listen(8080);