import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import wrapWithLoadData from './wrapWithLoadData'

class CommentApp extends Component {
	static propTypes = {
		data: PropTypes.any,
		saveData: PropTypes.func.isRequired
	}
	constructor(props) {
		super(props)
		//console.log(this.props);
		//这里直接访问this.props是undefined,需要传入props,然后调用super才可访问
		this.state = {
			comments: this.props.data
		}
	}
	handleSubmitComment(comment){
		if(!comment) return
		if(!comment.username) return alert('Please input username~')
		if(!comment.content) return alert('Pleaes input content~')	
		const comments = this.state.comments
		comments.push(comment)
		this.setState({comments})
		this.props.saveData(comments)
	}
	handleDeleteComment(index){
		const comments = this.state.comments
		//const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动
		comments.splice(index,1)
		this.setState({comments})
		this.props.saveData(comments)
	}
	render () {
		return (
			<div className='wrapper'>
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
				<CommentList comments={1} 
				onDeleteComment={this.handleDeleteComment.bind(this)}/>
			</div>	
			)
	}
}

CommentApp = wrapWithLoadData(CommentApp,'comments')

export default CommentApp