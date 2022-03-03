export function numerosAleatorios(qtd =1, numeros=[]){
    qtd = +qtd
    console.log(numeros)
    if(qtd<1 && qtd > 20){
        throw "Quantidade inválida!"
    }

    if(numeros.length === qtd){
        return numeros.sort((n1, n2)=> n1+n2)
    }
    
    let num = parseInt(Math.random()*60)+1
    if(!numeros.includes(num)){
        return numerosAleatorios(qtd, [...numeros, num])
    }else{
        return numerosAleatorios(qtd, numeros)
    }
}