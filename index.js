const readline = require('readline');
const consola = require('consola');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function wordCounter () {

    rl.question('Inserisci una frase di almeno 5 parole: ', (answer) => {
        let wordCount = answer.match(/(\w+)/g).length;

        if (wordCount < 5) {
            consola.error(`La tua frase è troppo corta, riprova: `);
            wordCounter();
        } else {
            consola.success('Grazie!')
            rl.close();
        }      
      });
}
wordCounter();