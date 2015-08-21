var React = require('react');

var divStyle = {
	position: 'absolute',
	width: '20',
	height: '20',
	backgroundColor: 'red'
}

module.exports = React.createClass({
	render: function () {
		return (
			<div 
				style={divStyle} 
				onClick={this.handleClick}>
			</div>
		)
	},
	handleClick: function(e) {
		var nextState = this.props.gameState;
		nextState.challenges[this.props.id] = !this.props.gameState.challenges[this.props.id]
		this.props.changeGameState({ gameState: nextState })
		console.log(nextState);
	}
})