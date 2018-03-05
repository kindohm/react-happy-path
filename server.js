const app = require('express')();
const bodyParser = require('body-parser');
const server = require('http').Server(app);

app.use(bodyParser.json());

app.get('/api/foo', (req, res) => {
    res.send({ message: 'oh hai!' });
});

server.listen(3001);
