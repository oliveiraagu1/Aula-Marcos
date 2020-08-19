let maiornumero = 0
let menornumero = 50

for (let i = 0; i < 10; i++) {

    let entrada = Number(prompt('digite um número entre 0 e 50:'));
    
    if (0 <= entrada <= 50) {

        if (entrada <= menornumero){
            menornumero = entrada
        }

        if (entrada >= maiornumero){
            maiornumero = entrada
        }
    }
};

alert(`O maior numero digitado foi ${maiornumero}. O menor ${menornumero}.`)
