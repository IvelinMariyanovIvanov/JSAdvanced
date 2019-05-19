function sortArray(array, sortMethod) {

    let assendingComparator = function(a, b) {
        return a-b;
    }

    let desendingComparator = function(a, b) {
        return b-a;
    }

    let sortingStrategies = {
        'asc' : assendingComparator,
        'dsc' : desendingComparator
    }

    return array.sort(sortingStrategies[sortMethod]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));

