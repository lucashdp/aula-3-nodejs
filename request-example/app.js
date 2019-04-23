//example to run: node app.js doRequest --company BBAS3.SA

const request = require('request');
const yargs = require('yargs');

const getStock = (company) => {
    const url = `https://www.worldtradingdata.com/api/v1/stock?symbol=${company}&api_token=T345RcQGHsuayJuEu7wn3TNsjjeFURz2JPskEEEiUaTcAw293IFonXJzatdN`;

    request({ url: url, json: true }, (err, response, body) => {
        console.log(body.data);
    });
}

yargs.command({
    command: 'stock',
    describe: 'do stock request',
    builder: {
        company: {
            describe: 'company',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        getStock(argv.company);
    }
});

yargs.parse();