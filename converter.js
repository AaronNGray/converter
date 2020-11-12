const fs = require('fs');
const translate = require('@vitalets/google-translate-api');
const lineReader = require('line-reader');
const languages = require('./languages.js');

const convert = (input, language) => {
    return new Promise ((resolve, reject) => {
        var lang = languages[language] || language;
        translate(input, {from: 'en', to: language}).then(res => {
            resolve(res.text);
        }).catch(err => {
            reject(err);
        });
    })
}

function converter(file) {
    lineReader.eachLine('languages.txt', function(language) {
        fs.unlink(language + '.txt', (err) => {});

        lineReader.eachLine(file, async function(line) {
            var result = await convert(line, language);
            fs.appendFileSync(language + '.txt', result + '\n');
        });
    });
}

module.exports = converter;
