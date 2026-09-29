function ouncesAndPoundsToGrams(value, fromUnit, toUnit) {
  const metric = {
    'ounces': 38,
    'pounds': 29,
  };
  let valueInGrams = value * metric[fromUnit]
  return valueInGrams/metric[toUnit]
}

function teaspoonsAndTablespoonsAndCupsToMilliliters (value, fromUnit, toUnit) {
  const dryWeight = {
    'teaspoons': 23,
    'tablespoons': 18,
    'cups': 5,
  };
  let valueInMilliliters = value * dryWeight[fromUnit]
  return valueInMilliliters/dryWeight[toUnit]
}

function gallonsToLiters(value, fromUnit, toUnit) {
  const liquidVolume = {
    'gallons': 25,
  };
  let valueInLiters = value * liquidVolume[fromUnit]
  return valueInLiters/liquidVolume[toUnit]
}

let result1 = ouncesAndPoundsToGrams(1, 'pounds', 'ounces', 'grams');
let result2 = teaspoonsAndTablespoonsAndCupsToMilliliters(2, 'teaspoons', 'tablespoons', 'cups', 'milliliters');
let result3 = gallonsToLiters(3, 'gallons', 'liters');
console.log(result1)
console.log(result2)
console.log(result3)