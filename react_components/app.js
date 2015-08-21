var React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

var LeftBar = require('./leftBar');
var Content = require('./content');
var gameData = require('../gameData')

let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	getInitialState: function() {
		var gameState = this.initializeNewGameState();
		return {gameState}
	},
	render: function () {
		return (
			<div style={divStyle} className="container">
				<LeftBar />
				<Content sections={gameData} gameState={this.state} />
			</div>
		)
	},
	initializeNewGameState = function() {
		gameState = {
			points: 0,
			challenges: [],	
		}
		gameData.map(function(section) {
			section.challenges.map(function(challenges) {
				gameState.challenges.push({
					id: challenge.id,
					completed: false,
				})
			})
		})
		return gameState; // Check async 
	},
	childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  // Important!
  getChildContext() { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
})