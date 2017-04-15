import React, {Component} from 'react'
import PropTypes from 'prop-types'
import wrapWithLoadData from './wrapWithLoadData'

class CommentInput extends Component {
	static propTypes = {
		onSubmit: PropTypes.func,
		data: PropTypes.any,
		saveData: PropTypes.func.isRequired
	}
	constructor (props) {
		super(props)
		this.state = {
			username: props.data,
			content: ''
		}
	}
	
	componentDidMount(){
		this.textarea.focus()
	}
	handleUsernameBlur(e){
		this.props.saveData(e.target.value)
	}
	handleUsernameChange(event){
		this.setState({
			username: event.target.value
		})
	}
	handleContentChange(event){
		this.setState({
			content: event.target.value
		})
	}
	handleButtonClick(){
		if(this.props.onSubmit){
			const {username,content}= this.state
			const createdTime = +new Date()
			this.props.onSubmit({username,content,createdTime})
		}
		this.setState({
			content: ''
		})
	}
	render(){
		return (
			<div className='comment-input'>
				<div className='comment-field'>
					<span className='comment-field-name'>Username: </span>
					<div className='comment-field-input'>
						<input value={this.state.username} 
						onBlur={this.handleUsernameBlur.bind(this)}
						onChange={this.handleUsernameChange.bind(this)}/>
					</div>
				</div>
				<div className='comment-field'>
					<span className='comment-field-name'>Content: </span>
					<div className='comment-field-input'>
						<textarea ref={(textarea) => this.textarea=textarea}
						value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
					</div>
				</div>
				<div className='comment-field-button'>
					<button onClick={this.handleButtonClick.bind(this)}>
						Publish
					</button>
				</div>
			</div>
			)
	}
}
CommentInput = wrapWithLoadData(CommentInput,'username')
export default CommentInput