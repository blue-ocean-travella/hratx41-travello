/* eslint-disable indent */
const faker = require('faker');
const fs = require('fs');

const insertToDatabase = () => {

    for (let i = 9000000; i < 10000000; i++) {
        let data = `${i + 1} \n`;

        fs.appendFileSync('uuid.csv', data, (err) => {
            if (err) {
                console.log('error', err);
            }
        });
    }
};

insertToDatabase();