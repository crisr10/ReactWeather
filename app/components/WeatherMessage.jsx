var React = require('react');

// var WeatherMessage = React.createClass({
// 	render: function () {

// 		var {temp, location} = this.props;
// 		// var temp = this.props.temp;
// 		// var location = this.props.location;

// 		return (
// 			<div>
// 				<p>It is {temp} in {location}</p>
// 			</div>
// 		)
// 	}
// });


var WeatherMessage = ({temp, location}) => {

	// var {temp, location} = props;

	return (
			<div>
				<p>It is {temp} in {location}</p>
			</div>
	)
}


module.exports = WeatherMessage;