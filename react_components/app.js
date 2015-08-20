var React = require('react');

var LeftBar = require('./leftBar');
var Content = require('./content');
var gameData = require('../gameData')

var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	render: function () {
		return (
			<div style={divStyle} className="container">
				<LeftBar />
				<Content sections={gameData} />
			</div>
		)
	}
})