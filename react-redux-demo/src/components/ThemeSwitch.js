import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
	static propTypes = {
		themeColor: PropTypes.string,
		onSwitchColor: PropTypes.func
	}
	handleSwitchThemeColor(color){
		if(this.props.onSwitchColor){
			this.props.onSwitchColor(color)
		}
	}
	
  render () {
    return (
      <div>
        <button style={{ color: this.props.themeColor }}
        	onClick={this.handleSwitchThemeColor.bind(this,'green')}>Green</button>
        <button style={{ color: this.props.themeColor }}
        	onClick={this.handleSwitchThemeColor.bind(this,'blue')}>Blue</button>
      </div>
    )
  }
}

export default ThemeSwitch