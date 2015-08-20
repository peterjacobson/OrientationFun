var React = require('react');

var mui = require('material-ui') 

var Checkbox = mui.Checkbox;

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
					<Checkbox
		        name="checkboxName1"
		        value="checkboxValue1"
		        label=""/>
				</div>
				<p>{challenge.description}</p>
			</div>
		)
	}
})