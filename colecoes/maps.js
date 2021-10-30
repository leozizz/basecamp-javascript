//Função que irá receber o Map
function getAdmins(map) {
    let admins = [];

    //"for" que ira iterar cada entrada do map, no caso a chave e o valor
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

//Const responsável por popular o map com os usuarios e papeis no sistema.
const usuarios = new Map();

usuarios.set('Leonardo', 'Admin');
usuarios.set('Ingrid', 'User');
usuarios.set('Vinicius', 'Admin');
usuarios.set('Giovani', 'Admin');

console.log(getAdmins(usuarios))
