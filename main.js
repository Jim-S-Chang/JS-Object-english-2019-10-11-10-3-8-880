var user = {}
user['name'] = 'John'
user['surname'] = 'Mike'
user.name = 'Peter'
delete user.name

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
}
let pieces = 0
for (const key in fruit) {
    if (fruit.hasOwnProperty(key)) {
        const element = fruit[key];
        pieces += element
    }
}
console.log(pieces)