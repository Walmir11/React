const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite dois números inteiros separados por espaço: ', (input) => {
    let line = input.split(' ');
    let pimentoes_amarelos = parseInt(line[0]);
    let pimentoes_vermelhos = parseInt(line[1]);
    let X = pimentoes_amarelos + pimentoes_vermelhos;
    console.log('X = ' + X);
    rl.close();
});