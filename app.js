const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Harley Says: Hello World! Also, Added the manual approvial'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
