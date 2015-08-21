var React = require('react');

var Section = require('./section');

var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	render: function () {
		var sections = this.props.sections
		return (
			<div> 
				<h1>Welcome To Enspiral</h1>
				<p>This is your journey into Enspiral</p>
				{sections.map(function(section) {
					return <Section section={section}/>
				})}
				<p> {this.state} </p>
			</div>
		)
	}
})