const express = require('express');
const path = require('path');
require('dotenv').config(); // importăm fișierul .env, fiind accesibil prin obiectul global process.env
const admin = require('./admin'); // importăm din /admin/index.js
const blog = require('./blog'); // importăm din /blog.js

const app = express();
const port = 3000; // configurăm portul pe care va rula aplicația: localhost:3000

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // aici vom ține fișierele statice pentru blog

app.use('/admin', admin); // aici legăm routerul admin de ruta /admin
app.use('/', blog); // blogul va fi disponibil pe root (ex. localhost:3000/)

app.listen(port, () => {
  console.log(`App started`);
});
