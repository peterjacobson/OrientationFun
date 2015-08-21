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
		var nextState = this.state.gameState;
		nextState.challenges[this.id] = !this.state.gameState.challenges[this.id]
		this.setState({ nextState })
	}
})