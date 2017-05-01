var React = require('react');

// var About = React.createClass({
// 	render: function() {
// 		return (
// 			<h3>This is the ABOUT component</h3>
// 		)
// 	}
// });

// Code has the same functionality as commented out code, but this time the arrow function was used instead
var About = (props) => {
	return (
		<div>
			<h3>About</h3>
			<p>Welcome to the about page</p>
		</div>
	)
};

module.exports = About;