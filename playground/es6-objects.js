const userName = 'Joe'
const userAge = 46

const user = {
    name: userName,
    age: userAge,
    location: 'Kitchener'
}

console.log(user);

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label, stock} = product;