const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// calling python code ************************
const spawn = require("child_process").spawn;
const py = spawn('python',["./lib/ai/test.py"]);
const data = 'hi there Python!';
let dataString = '';
py.stdout.on('data', function(data){
  dataString += data.toString();
}); 
py.stdin.write(JSON.stringify(data));
py.stdin.end();
py.stdout.on('end', function(){
  console.log('Python response: ', dataString);
});
// *****************************

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './client/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
