///Object Destruturing

/*const person = {
	name: "Ravi",
	age: 27,
	location: {
		city: 'Delhi',
		temp: 50
	}
};

const { name: firtName = 'Anonymous', age } = person;

console.log(`${firtName} is ${age}.`);

const { city, temp: temperature } = person.location;
if(city && temperature){
	console.log(`It's ${ temperature } in the ${ city }.`);
}
*/

/*const book = {
	name: 'Ego is the Enemy',
	author: 'Ryan Holiday',
	publisher:{
		name: 'Penguin'
	}
};

const { name: publisherName ='Self-Published' } = book.publisher;

if(publisherName){
	console.log(publisherName);
}*/


// Array Destructuring


const address = ['510, St. john street', 'New-Delhi','Delhi', '110054'];

const [street, city, state, pin] = address;

console.log(`You are at ${city} ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, ,medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);