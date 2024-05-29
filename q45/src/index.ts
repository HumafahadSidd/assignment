function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: {[key:string]:any } []): object {
    let carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}

let answers = storeCarInfo('Honda', 'Civic', {color: 'black'}, {features: ['navigation', 'power window']});
console.log(answers);
