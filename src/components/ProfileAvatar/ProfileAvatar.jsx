import React from 'react';
import Preloader from '../Preloader/Preloader';

const ProfileAvatar = props => {

	const { profile } = props;

	if (!profile) return <Preloader />;

	let avatar = profile.photos.small || profile.photos.large || "../assets/img/avatar.jpg";
	console.log(avatar);

	return (
		<div className="profile-avatar">
			<div className="profile-avatar__avatar">
				<img className="profile-avatar__img" src={avatar} alt="Ваш аватар" />
			</div>
			<div className="profile-avatar__status-and-name">
				<p className="profile-avatar__name">{profile.fullName}</p>
				<p className="profile-avatar__status">Статус</p>
			</div>
		</div>
	)
}

export default ProfileAvatar;