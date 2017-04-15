import React, { Component }from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Header from './containers/Header'
import Content from './containers/Content'

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
//(0 , _reactRedux.createStore) is not a function
//错误原因： 错误地引入import { createStore } from 'react-redux', 
//正确写法是 import { createStore } from 'redux'
//因此需要思考错误函数来源

class Index extends Component {
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