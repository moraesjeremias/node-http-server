const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === '/json'){ //HTML
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({phrase: "brabo"}))
  }
    else if (path === '/html'){ //JSON
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
                fs.readFile('./assets/index.html', 'utf-8', function(err, data) {
                    if (err) {
                        console.log(err);
                        return err;
                    } else {
                        res.end(data);
                    }})
              
  } else { //String
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain', 'charset=utf-8');
    res.end("Olá mundo")
  }

});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});