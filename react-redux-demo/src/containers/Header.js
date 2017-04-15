import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}

// Header = connect(mapStateToProps)(Header)
// export default Header

export default connect(mapStateToProps)(Header)