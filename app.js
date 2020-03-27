const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/minesweeper', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/minesweeper.html'));
});

app.get('*', (req, res) => {
    res.send("Wrong page m8.");
});

app.listen(3000, () => {
    console.log("The server is listening.");
});