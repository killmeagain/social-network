import React from 'react';

const ProfileAvatar = () => {
	return (
		<div className="profile-avatar">
			<div className="profile-avatar__avatar">
				<img className="profile-avatar__img" src="./assets/img/avatar.jpg" alt="Ваш аватар" />
			</div>
			<div className="profile-avatar__status-and-name">
				<p className="profile-avatar__name">Тимофей Судаков</p>
				<p className="profile-avatar__status">Статус</p>
			</div>
		</div>
	)
}

export default ProfileAvatar;