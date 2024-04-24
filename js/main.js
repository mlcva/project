/* Объекты

const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA'
}

delete myCity.country 
оператор удаления

myCity['country'] = 'USA'

console.log(myCity.city)

console.log(myCity.popular)

myCity.city = 'Las Vegas'

console.log(myCity) */


/* const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity.info.isPopular)

delete myCity.info['isPopular']

console.log(myCity) */


// const name = 'Bogdan'
// const postsQty = 23

// const UserProfile = {
//     name,
//     postsQty,
//     hasSignedAgreement: false
// }

// console.log(UserProfile)

// function ask(question, yes, no) {
//     if(confirm(question)) yes()
//     else no();
// }

// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );

// let ask = 
// confirm("Вы согласны?") ?
//  () => alert("Вы согласились.") :
//  () => alert("Вы отменили выполнение.");
// ask();

// let user1 = new Object();
// let user = {
//     name: 'John',
//     age: 30,
//     "likes birds": true
// };

// alert( user.name );
// alert( user.age );

// user.isAdmin = true;

// delete user.age;

// alert(user["likes birds"]);

// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//     [fruit]: 5,
// };

// alert( bag.apple );

// let fruit = prompt("Какой фрукт купить?", "apple");
// let bag = {};

// bag[fruit] = 5;

// let fruit = 'apple';
// let bag = {
//     [fruit + 'Computers']: 5
// };


// function makeUser(name, age) {
//     return {
//         name, // name: name,
//         age // age: age
//     };
// }

// let user = makeUser("John", 30);
// alert(user.name);

// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
// };

// alert(obj.for + obj.let + obj.return);

// let obj = {
//     0: 'Тест'
// };

// alert( obj['0'] );
// alert( obj[0]);

// let obj = {};
// obj.__proto__ = 5;
// alert(obj.__proto__);

// let user = {};

// alert( user.noSuchProperty === undefined );

// "key" in object /*проверка существования свойства в объекте*/

// let user = {
//     name: "John",
//     age: 30
// };
// alert( "age" in user );
// alert( "blabla" in user );

// let user = { age: 30 };

// let key = "age";
// alert( key in user );

// let obj = {
//     test: undefined
// };

// alert( obj.test );
// alert( "test" in obj );

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };

// for (let key in user) {
//     alert( key );
//     alert( user[key] );
// }

// let codes = {
//     "+49": "Германия",
//     "+41": "Швейцария",
//     "+44": "Великобритания",
//     "+1": "США"
// };

// for (let code in codes) {
//     alert( +code );
// }


// let user = {};

// user.name = "John";

// user.surname = "Smith";

// user.name = "Pete";

// delete user.name;



// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// // let sum = salaries.John + salaries.Ann + salaries.Pete;

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// alert(sum);


// const obj = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

// alert(obj);


// let user = { name: "John"};
// let admin = user;

// admin.name = "Pete";

// alert(user.name);


// let user = {
//     name: "John",
//     age: 30
// };

// let clone = {};

// for (let key in user) {
//     clone[key] = user [key];
// }

// clone.name = "Pete";
// alert( user.name );

// let user = { name: "John"};

// let permission1 = {canView: true};
// let permission2 = {canEdit: true};

// Object.assign(user, permission1, permission2);


// let user = { name: "John" };
// Object.assign(user, {name: "Pete"});
// alert(user.name);


// let user = {
//     name: "John",
//     age: 30
// };

// let clone = Object.assign({}, user);


// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// let clone = Object.assign({}, user);

// alert( user.sizes === clone.sizes);

// user.sizes.width++;




// Метод - свойство объекта, значение которого - функция.

// const myCity ={
//     city: 'New York',
//     cityGreeting() {
//         console.log('Greetings!!')
//     }
// }

// myCity.cityGreeting() 


// Мутация

// const a = 10
// let b = a
// b = 30

// console.log(a)
// console.log(b)

// const person = {
//     name: 'Bob',
//     age: 21
// }

// person.age = 22
// person.isAdult = true

// console.log(person.age);
// console.log(person.isAdult)

// const person = {
//     name: 'Bob',
//     age : 25
// }

// const person2 = person

// person2.age = 26
// person2.isAdult = true

// console.log(person.age)
// console.log(person.isAdult)

// const person = {
//     name: 'Bob',
//     age: 25
// }

// const person2 = Object.assign({}, person)

// person2.age = 26

// console.log(person2.age)
// console.log(person.age)

// const person = {
//     name: 'Bob',
//     age: 25
// }

// const person2 = { ...person }
// person2.name = 'Alice'

// console.log(person2.name)
// console.log(person.name)

// const person = {
//     name: 'Bob',
//     age: 25
// }

// const person2 = JSON.parse(JSON.stringify(person))

// person2.name = 'Alice'

// console.log(person2.name)
// console.log(person.name) 

setTimeout(() => {
    console.log('Отложенное сообщение')
}, 1000)
//Будет выведено в консоль через 1000 мс
