const express = require('express');
const hbs = require('hbs');
const path = require('path');
const request = require('request');

const getStock = (company, res) => {
    const url = `https://www.worldtradingdata.com/api/v1/stock?symbol=${company}&api_token=T345RcQGHsuayJuEu7wn3TNsjjeFURz2JPskEEEiUaTcAw293IFonXJzatdN`;

    request({ url: url, json: true }, (err, response, body) => {
        res.send(body.data);
    });
}

//settings
const publicAssets = path.join(__dirname, '/public');
var app = express();
app.set('view engine', 'hbs');
app.use(express.static(publicAssets));

app.get('', (req, res) => {
    getStock("PETR4.SA", res);
});

app.get('/cotacoes/:id', (req, res) => {
    getStock(req.params.id, res);
});

app.get('/sobre', (req, res) => {
    
});

app.get('/help', (req, res) => {
    
});

app.listen(3000, () => {
    console.log(`servidor no ar na porta 3000`)
});