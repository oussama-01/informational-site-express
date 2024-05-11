
// import the express module
const express = require('express');

const app = express();

//



app.get('/', (req, res) => {

    res.sendFile('index.html', { 'root': '/home/oussama/repos/informational-site-express/' });

})


app.get('/about', (req, res) => {

    res.sendFile('about.html', { 'root': '/home/oussama/repos/informational-site-express/' });

})


app.get('/contact-me', (req, res) => {
    res.sendFile('contact-me.html', { 'root': '/home/oussama/repos/informational-site-express/' });

})



//


app.listen(8080);