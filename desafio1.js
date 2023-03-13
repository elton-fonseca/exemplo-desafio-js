//[---hidden—
const stdin = process.openStdin();
stdin.addListener('data', text => {
    const data = text.toString().trim();
    stdin.pause(); // stop reading
    main(JSON.parse(data));
});
//---hidden---]

function ordenarNumeros(lista, callback) {
    const listaOrdenada = [...lista].sort((a, b) => a - b);
    callback(listaOrdenada);
}


function main(numeros) {

    ordenarNumeros(numeros, (numeros) => {
        for (let numero of numeros) {
            console.log(numero);
        }
    });

}
