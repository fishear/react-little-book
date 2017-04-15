import { connect } from 'react-redux'
import ThemeSwitch from '../components/ThemeSwitch'

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSwitchColor: (color) => {
			dispatch({type: 'CHANGE_COLOR', themeColor: color})
		}
	}
}
// ThemeSwitch = connect(mapStateToProps,mapDispatchToProps)(ThemeSwitch)

// export default ThemeSwitch
//import进来的东西是不能赋值的,这两行会报错: ThemeSwitch is read-only
//由于 ES6 输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错。

export default connect(mapStateToProps,mapDispatchToProps)(ThemeSwitch)