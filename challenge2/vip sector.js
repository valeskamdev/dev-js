const list = [
    { name: "Adam", vip: true },
    { name: "Lisa", vip: false },
    { name: "Bob", vip: true },
    { name: "Charlie", vip: false },
    { name: "David", vip: true },
    { name: "Eve", vip: false },
    { name: "Frank", vip: true },
    { name: "George", vip: false },
    { name: "Henry", vip: true },
    { name: "Irene", vip: false },
    { name: "Jack", vip: true },
    { name: "Jill", vip: false },
]

const newList = list.map(client => {
    const newList = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? "Black" : "Green"
    }
    return newList;
})

console.log(newList);

// { name: 'Adam', vip: true, sector: 'Black' }  ...