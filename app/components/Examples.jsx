var React = require('react');
var {Link} = require('react-router');
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
		<div>
			<h1 className='text-center page-title'>Examples</h1>
			<p>Here are a few example locations to try out</p>
				<ol>
					<li>
						<Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
					</li>
					<li>
						<Link to='/?location=Rio'>Rio, Brazil</Link>
					</li>
					<li>
						<Link to='/?location=Bogota'>Bogota, Colombia</Link>
					</li>
				</ol>
		</div>
	)
};

module.exports = Examples;