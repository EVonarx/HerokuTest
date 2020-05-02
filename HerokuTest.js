const http = require('http'); // library http is required for the js object http

// Notice : there a tons of libraries that can be loaded with npm

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>That is a great app running on PaaS Heroku</h1>');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Our app is running on port ${PORT}");
});
