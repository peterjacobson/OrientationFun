var React = require('react');

var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	render: function () {
		var challenge = this.props.challenge;
		return (
			<div>
				<div>
					<p>{challenge.title}</p>
					<p>{challenge.points}</p>
					<div id="checkBox">
					</div>
				</div>
				<p>{challenge.description}</p>
			</div>
		)
	}
})