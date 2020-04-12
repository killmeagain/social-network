import React from 'react';
import ProfilePage from'./ProfilePage';
import { connect } from 'react-redux';
import * as axios from'axios';
import { SET_PROFILE_AC } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfilePageContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
			.then(response => {
				this.props.setProfile(response.data);
			});
	}

	render() {
		return (
			<ProfilePage profile={this.props.profile} />
		)
	}
}

const mapStateToProps = state => ({
	profile: state.profilePage.profile
});

const mapDispatchToProps = dispatch => ({
	setProfile: profile => dispatch(SET_PROFILE_AC(profile))
})

let routerComponent = withRouter(ProfilePageContainer);
export default connect(mapStateToProps, mapDispatchToProps)(routerComponent);