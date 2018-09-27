const usuarios = [
  {nome:'Diego', idade: 23, empresa:'Rocketseat'},
  {nome:'Gabriel', idade: 15, empresa:'Rocketseat'},
  {nome:'Lucas', idade: 30, empresa:'Facebook'}
];

let map    = usuarios.map(user => user.idade);
let filter = usuarios.filter(user => user.idade > 18 && user.empresa == "Rocketseat");
let find   = usuarios.find(user => user === 'google');
let mix = usuarios
  .map(user => ({...user, idade:user.idade * 2}))
  .filter((user) => user.idade < 50);

console.log(mix);
