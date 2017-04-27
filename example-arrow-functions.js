var names = ['Daisy', 'Cristian', 'Nick', 'David', 'Raul'];

// names.forEach(function (name) {
// 	console.log('forEach', name);
// });

// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Cristian'));

// var person = {
// 	name: 'Cristian',
// 	greet: function () {
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to ' + name)
// 		});
// 	}
// };

// person.greet();

// Challenge Area

function add (a, b) {
	return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
	return (a + b);
}

var addExpression = (a, b) => (a + b);

console.log('add statement 1: ' + addStatement(1, 2));
console.log('add statement 2: ' + addStatement(5, 5));

console.log('add expression 1: ' + addExpression(3, 3));
console.log('add expression 2: ' + addExpression(4, -4));