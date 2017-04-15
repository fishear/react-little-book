import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
	//子组件要获取 context 里面的内容的话，就必须写 contextTypes 来声明和验证你需要获取的状态的类型，它也是必写的，
	//如果你不写就无法获取 context 里面的状态，但是不会报错。
	// static contextTypes = {
	// 	store: PropTypes.object
	// }
	// constructor(){
	// 	super()
	// 	this.state = {themeColor: ''}
	// }
	// componentWillMount(){
	// 	const {store} = this.context
	// 	this._updateThemeColor()
	// 	store.subscribe(() => this._updateThemeColor())
	// }
	// _updateThemeColor(){
	// 	const {store} = this.context
	// 	const state = store.getState()
	// 	this.setState({themeColor: state.themeColor})
	// }
	static propTypes = {
		themeColor: PropTypes.string
	}
  render () {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}

Content = connect(mapStateToProps)(Content)

export default Content