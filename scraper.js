const axios = require('axios');
const fs = require('fs');
const moment = require('moment');

const board = 'TQBR';
const yesterday = moment().subtract(1, 'days').format("YYYY-MM-DD");

const TICKs = fs.readFileSync("C:/Dor/courwo/TICK.txt", "utf8").split('\n').map(line => line.trim());

const outputFilePath = 'C:/Dor/courwo/Database//tickers_data.txt';
const output_file = fs.createWriteStream(outputFilePath);

async function fetchData() {
    for (const TICK of TICKs) {
            const response = await axios.get('http://iss.moex.com/iss/securities//');
            const data = response.data;
            const tickerData = data.map(row => `,${row.CLOSE}\n`).join('');
            output_file.write(tickerData);
    }
    output_file.end();
}
fetchData();