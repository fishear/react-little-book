function createStore(reducer){
	let state = null
	const listeners = []
	const subscribe = (listener) => listeners.push(listener)
	const getState = () => state
	const dispatch = (action) => {
		state = reducer(state,action)
		listeners.forEach((listener) => listener())
	}
	dispatch({}) //initiate state
	return {getState, dispatch, subscribe}
}
function reducer(state,action){
	// reducer is a pure function
	if(!state){
		return {
			title: {
				text: 'Make Redux Title',
				color: 'green'
			},
			content:{
				text: 'Make redux content',
				color: 'blue'
			}
		}
	}
	switch (action.type) {
	    case 'UPDATE_TITLE_TEXT':
	      return {
	      	...state,
	      	title:{
	      		...state.title,
	      		text: action.text
	      	}
	      }
	    case 'UPDATE_TITLE_COLOR':
	      return {
	      	...state,
	      	title:{
	      		...state.title,
	      		text: action.color
	      	}
	      }
	    default:
	      return state
	  }
}
function renderApp(newAppState,oldAppState={}){
	if(newAppState === oldAppState) return 
	console.log('render app...')
	renderTitle(newAppState.title,oldAppState.title)
	renderContent(newAppState.content,oldAppState.content)
}

function renderTitle(newTitle,oldTitle={}){
	if (newTitle === oldTitle) return 
  	console.log('render title...')
	const titleDom = document.getElementById('title')
	titleDom.innerHTML = newTitle.text
	titleDom.style.color = newTitle.color
}

function renderContent(newContent, oldContent = {}){
	if (newContent === oldContent) return
  	console.log('render content...')
	const contentDom = document.getElementById('content')
	contentDom.innerHTML = newContent.text
	contentDom.style.color = newContent.color
}

const store = createStore(reducer)
let oldState = store.getState()
store.subscribe(() => {
	const newState = store.getState()
	renderApp(oldState,newState)
	oldState = newState
})

renderApp(store.getState())
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《Make Redux Title》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'red' })