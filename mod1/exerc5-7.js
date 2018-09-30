/*5.1
  const arr = [1,2,3,4,5,6];

  let [x, ...y ] = arr;

  function soma(...params) {
    return params.reduce((total, next) => total + next); 
  }

  soma(1,2,3,5);
*/
/* 5.2
  const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
      cidade: 'Rio  do Sul',
      uf: 'SC',
      pais: 'Brasil'
    }
  };
  const usuario2 = {...usuario, nome: 'Gabriel'};
  const usuario3 = {
    ...usuario,
    endereco: {
      ...usuario.endereco,
      cidade: 'Lontras'
    }
  }
*/

/* Exercicio 6
  const usuarios = 'Diego', idade = 23;
  console.log(`O usuário ${usuarios} possui ${idade} anos`);
*/

/* Exercicio 7
  const nome = 'Diego', idade = 23;
  const usuario = {
    nome,
    idade,
    cidade: 'Rio do Sul'
  };
*/