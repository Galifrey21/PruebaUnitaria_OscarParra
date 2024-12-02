// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))



const fromDollarToYen =(dollar)=>{
let yen = (156.5/1.07)*dollar;
return yen;
}

const fromEuroToDollar=(euro)=>{
    let dollar = euro*1.07;
    return dollar;

}

const fromYenToPound=(yen)=>{
    let pound = (0.87/156.5)*yen;
    return pound;
}
// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

