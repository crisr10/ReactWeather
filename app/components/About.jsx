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
			<h1 className='text-center page-title'>About</h1>
				<p>This is a weather application built in react. I have built for the complete React Web Application</p>
				<p>
					Here are some of the tools I used:
				</p>
				<ul>
					<li>
						<a href='https//facebook.github.io/react'>React</a> - This was the JavaScript framework I used.
					</li>
					<li>
						<a href='https//openweathermap.org'>Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
					</li>
				</ul>
		</div>
	)
};

module.exports = About;