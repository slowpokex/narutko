const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const sum = longComputation();
    return res.end(sum.toString());
  }
  res.end(http.STATUS_CODES[200]);
});
server.listen(8000);
