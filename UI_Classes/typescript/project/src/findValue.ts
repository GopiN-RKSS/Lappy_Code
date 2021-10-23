let bagCapacity = 0;
let value = 0;
let items= [
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

function findValue(items: { weight:number, value :number }[], bagCapacity: number,value:number): number {
    for (let i = 0; i <= items.length - 1;i++) {
        for (let x in items) {
            if (bagCapacity <= 20) {
                bagCapacity += items[x].weight;
                value += items[x].value;
            }
        }
    }
    console.log(bagCapacity);
    return value;
}
let res:number = findValue(items, bagCapacity,value);
console.log(res);
