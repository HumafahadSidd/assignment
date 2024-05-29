"use strict";
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    let carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
let answers = storeCarInfo('Honda', 'Civic', { color: 'black' }, { features: ['navigation', 'power window'] });
console.log(answers);
