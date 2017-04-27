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
		<h3>This is the About Component</h3>
	)
};

module.exports = About;