const path = require('path');
const converter = require('./converter.js');
const languages = require('./languages.js');

if (process.argv.length == 4 && process.argv[2] == "convert") {
    console.log("converting... ");
    converter(process.argv[3]);
    console.log("done. ");
} else if (process.argv.length == 3 && process.argv[2] == "languages") {
    for (var language in languages)
        console.log(languages[language], ":", language);
} else {
    const base = path.basename(process.argv[0], path.extname(process.argv[0]));
    console.log("syntax:");
    console.log("\t", base, "convert <file>");
    console.log("\t", base, "languages");
}
