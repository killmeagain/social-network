import React from 'react';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import Posts from '../Posts/Posts';

const ProfilePage = () => {
	return (
		<div className="profile-page">
			<div className="profile-page__avatar">
				<ProfileAvatar />
			</div>

			<div className="profile-page__posts">
				<Posts />
			</div>
			
		</div>
	)
}

export default ProfilePage;