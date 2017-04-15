import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h1> Hello World!</h1>
//       </div>
//     );
//   }
// }

class Title extends Component {
  handleClickOnTitle(e) {
    //console.log(e)
    console.log(this)
  }
  render() {
    return (
        <h1 onClick={this.handleClickOnTitle}>React Little Book </h1>
      )
  }
}
class Header extends Component {
  render() {
    return (
      <div>
        <Title />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>This is Header</h2>
      </div>
    )
  }
}
class LikeButton extends Component {
  constructor () {
    super()
    this.state = {isLiked: false}
  }
  handleClickOnLikeButton (){
    this.setState({
      isLiked: !this.state.isLiked
    })
    if(this.props.onClick){
      this.props.onClick()
    }

  }
  render () {
    const wordings = this.props.wordings || {
      likedText: '取消',
      unlikedText: '点赞'
    }
    
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked?wordings.likedText:wordings.unlikedText}👍
      </button>
    )
  }
}
class Main extends Component {
  render(){
    return (
      <div>
      <h2>This is main content</h2>
      <LikeButton wordings={{likedText:'已赞',unlikedText:'赞'}}
      onClick={()=>console.log(this)}/>
      </div>
    )
  }
}
class Footer extends Component {
  render(){
    return (
      <div><h2>This is footer content</h2></div>
    )
  }
}
class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}


export default App;
