import React from 'react';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import PostsContainer from '../Posts/PostsContainer';

const ProfilePage = () => {
	return (
		<div className="profile-page">
			<div className="profile-page__avatar">
				<ProfileAvatar />
			</div>
			
			<div className="profile-page__posts">
				<PostsContainer />
			</div>

		</div>
	)
}

export default ProfilePage;