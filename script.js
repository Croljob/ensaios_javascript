var a = "meu primeiro script em JS!";
var vetor = [];
vetor.push([10.90,2,'k',2]);
vetor.push([2.3,400,'g',0.4]);
//console.log(vetor[1][2]);
var preco;
var peso;
for (let index = 0; index < vetor.length; index++) {
    preco = vetor[index][0];
    peso = vetor[index][3];
    let result = (preco/peso);
    let arrumado = result.toFixed(2);
    console.log(arrumado);
        
    const element = vetor[index];
    
} 