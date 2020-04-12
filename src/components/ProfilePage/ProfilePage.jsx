import React from 'react';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import PostsContainer from '../Posts/PostsContainer';

const ProfilePage = props => {
	return (
		<div className="profile-page">
			<div className="profile-page__avatar">
				<ProfileAvatar profile={props.profile}/>
			</div>
			
			<div className="profile-page__posts">
				<PostsContainer />
			</div>

		</div>
	)
}

export default ProfilePage;