var bagCapacity = 0;
var value = 0;
var items = [
    {
        weight: 7,
        value: 160
    },
    {
        weight: 3,
        value: 90
    },
    {
        weight: 2,
        value: 15
    }
];
function findValue(items, bagCapacity, value) {
    for (var i = 0; i <= items.length - 1; i++) {
        for (var x in items) {
            if (bagCapacity <= 20) {
                bagCapacity += items[x].weight;
                value += items[x].value;
            }
        }
    }
    console.log(bagCapacity);
    return value;
}
var res = findValue(items, bagCapacity, value);
console.log(res);
