// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    console.log(dollars);
    

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    console.log(expected);
    

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("How many yen is 1 dollar?", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(3.5);
    console.log(yens);
    

    // Si 1 euro son 1.07 dólares y 1 euro son 156.07 yens ¿cuantos yenes son 3.5 dolares?(156.5/1.07)*3.5
    const expected = (156.5/ 1.07)*3.5;
    console.log(expected);
    

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("How many pouds is 1 yen", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const punds = fromYenToPound(3.5);
    console.log(punds);
    

    // Si 1 euro son 156.5 yens y 1 euro son 0.87 punds ¿cuantos punds son 3.5 yens ?(0.87/156.5)*3.5
    const expected = (156.5/0.87)*3.5;
    console.log(expected);
    

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.019456869009584665); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
