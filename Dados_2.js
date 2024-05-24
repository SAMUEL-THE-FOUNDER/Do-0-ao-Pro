let preco = 19.90;
let desconto = 0.4;

console.log(preco * (1 - desconto));

let precoComDesconto = preco * (1- desconto);
console.log(precoComDesconto)


let nome = "caderno";
let categoria = "papelaria";
console.log("produto: " + nome 
    + ", categoria: " + categoria
    + ", preço: " + preco 
    + ", desconto: " + desconto
    + ", preço com desconto: " + precoComDesconto
);