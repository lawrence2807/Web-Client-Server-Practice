const { log } = require('console');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const PUBLIC = path.join(__dirname, 'public')

app.use(express.urlencoded({extends: true}));
app.use(express.static(PUBLIC))

app.get('/',(req, res)=>{
    console.log('Loading home...')
    res.sendFile(path.join(PUBLIC, 'home.html'));
});

app.get('/contactus', (req, res) => {
    console.log('Loading contactus us...');
    res.sendFile(path.join(PUBLIC, 'contactus.html'))

})


app.post('/contactus', (req, res) => {
    console.info('Contact Us has been called...\n');
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body. subject;

    console.log('Form data\n');
    console.log('Nombre: ' + name);
    console.log('Email: ' + email);
    console.log('Subject: ' + subject);

    res.redirect('/');
});

app.listen(PORT, ()=> {
    console.log('🥑 Server is running on port' +PORT)
});

