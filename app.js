const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/api', require('./src/routes')());



http.createServer(app).listen(app.get('port'), function(){
  console.log('Server listening to port ' + app.get('port'));
});

app.get('/health', (req, res) => {
  res.send('ok');
});
