var React = require('react');

// var Examples = React.createClass({
// 	render: function () {
// 		return (
// 			<h2>This is the examples component</h2>
// 		)
// 	}
// });

// Same functionality as commented out code, but using arrow function instead
var Examples = (props) => {
	return (
		<h2>This is the EXAMPLES component</h2>
	)
};

module.exports = Examples;