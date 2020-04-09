import React from 'react';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import Posts from '../Posts/Posts';

const ProfilePage = (props) => {
	return (
		<div className="profile-page">
			<div className="profile-page__avatar">
				<ProfileAvatar />
			</div>

			<div className="profile-page__posts">
				<Posts posts={props.profile.posts} />
			</div>

		</div>
	)
}

export default ProfilePage;