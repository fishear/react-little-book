import React, { Component }from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Header from './Header'
import Content from './Content'
import './index.css';
import { Provider } from './react-redux'
function createStore(reducer){
	let state = null
	const listeners = []
	const subscribe = (listener)=> listeners.push(listener)
	const getState = () => state
	const dispatch = (action) => {
		state = reducer(state,action)
		listeners.forEach((listener) => listener())
	}
	dispatch({})
	return {getState,dispatch,subscribe}
}
const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}
const store = createStore(themeReducer)

class Index extends Component {
	//如果你要给组件设置 context，那么 childContextTypes 是必写的。名字写错会报错
	// static childContextTypes = {
	// 	store: PropTypes.obejct
	// }
	// getChildContext(){
	// 	return {store}
	// }
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}


ReactDOM.render(
	<Provider store={store}>
  		<Index />
  	</Provider>,
  document.getElementById('root')
)