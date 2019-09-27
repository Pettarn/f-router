let arr = [
    {
        age: 1,
        name: '1'
    },
    {
        age: 2,
        name: '2',
    },
    {
        age: 3,
        name: '3',
    }
]

let arr2 = []
arr.forEach(item => {
    arr2.push(item.age)
})

console.log(arr2)