function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function getDollarFormatter(currency) {
    return function dollarFormater(value) {
        return currency(',', '$', true, value);
    }
}

let dollar = getDollarFormatter(currencyFormatter);
console.log(dollar(5000));