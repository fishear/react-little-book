import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'

class CommentInputContainer extends Component {
	static propTypes = {
		comments: PropTypes.array,
		onSubmit: PropTypes.func
	}
	constructor () {
		super()
		this.state = {
			username: ''
		}
	}
	componentWillMount(){
		this._loadUsername()
	}
	_loadUsername(){
		const username = localStorage.getItem('username')
		if(username){
			this.setState({username})
			//属性的简洁表示法，ES6 允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值
		}
	}
	_saveUsernameBlur(username){
		localStorage.setItem('username',username)
	}
	handleUsernameBlur(e){
		this._saveUsernameBlure(e.target.value)
	}
	handleButtonClick(comment){
		if(!comment) return
		if(!comment.username) return alert('Please input username~')
		if(!comment.content) return alert('Pleaes input content~')	
		const { comments } = this.props
		const newComments = [...comments,comment]
		localStorage.setItem('comments',JSON.stringify(newComments))
		if(this.props.onSubmit){
			// this.props.onSubmit 是 connect 传进来的
    		// 会 dispatch 一个 action 去新增评论
			this.props.onSubmit(comment)
		}
	}
	render(){
		return (
			<CommentInput 
				username={this.state.username}
				onUserNameInputBlur={this._saveUsernameBlur.bind(this)}
				onSubmit={this.handleButtonClick.bind(this)}/>
			)
	}
}
const mapStateToProps = (state) => {
	return {
		comments: state.comments
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (comment) => {
			dispatch(addComment(comment))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentInputContainer)