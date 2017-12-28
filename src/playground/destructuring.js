console.log('This is destructuring')

// object destructuring 

// const person = {
//     name: 'Serge',
//     age: 35,
//     location: {
//         city: 'New York',
//         temp: 42
//     }
// };

// // const name = person.name;
// // const age = person.age

// const { name: firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}`);

// // in order to rename a variable in a destructured 
// const { city, temp: temperature } = person.location

// if(person.location.city && typeof person.location.temp === 'number') {
//     console.log (`It's ${temperature} in ${city}`)
// }


// const book = {
//     title: 'ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)


// array destructuring

const address = [ '249 main Street', 'Bronx', 'NY', '19532'  ];

const [ street, , state = undefined  ] = address;
console.log(`Your are in ${street},  ${state}`)



const item = [ 'Coffee (Iced)', '$2.00', '$2.95', '$2.75']
const [ name, , medium ] = item
console.log(`A medium ${name} costs ${medium}`);