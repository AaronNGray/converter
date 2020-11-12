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
    console.log("syntax:");
    console.log("\t", process.argv[0], "index.js <file>");
    console.log("\t", process.argv[0], "languages");
}
