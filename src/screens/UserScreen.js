import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../components/ModuleStyling.module.css';

/*
En vy som renderar/visar användaren man klickat på från listan
*/
class UserScreen extends Component {
	static propTypes = {
		match: PropTypes.object,
	}

	render() {
		const user = this.props.match.params.user

		return (
		  <div className={styles.dashboard}>
				{ user ? <h1>  { user } </h1> : <h1>Please select a user.</h1>}
		  </div>
		)
	  }
}

export default UserScreen;