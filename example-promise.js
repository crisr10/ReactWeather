// function getTempCallback (location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }

// getTempCallback('Los Angeles', function(err, temp) {
// 	if (err) {
// 		console.log('error', err);
// 	} else {
// 		console.log('success', temp)
// 	}
// });


// function getTempPromise (location) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			resolve(79);
// 			reject('City not found');
// 		}, 1000);
// 	});
// }

// getTempPromise('Philadelphia').then(function (temp) {
// 	console.log('promise success', temp);
// }, function (err) {
// 	console.log('promise error', err)
// })


// Challenge Area
var num1 = 7;
var num2 = 8;
var num3 = '10';
var sum;

function addPromise(a, b) {
	return new Promise(function (resolve, reject) {
		setTimeout(function() {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			} else {
				reject('One of the parameters is not a number')
			}
		}, 1000);
	});
}

addPromise(num1, num2).then(function(sum) {
	console.log('Yay success', sum);
}, function (err) {
	console.log('Error', err)
});

addPromise(num1, num3).then(function(sum) {
	console.log('Yay success', sum);
}, function (err) {
	console.log('Error', err)
})


