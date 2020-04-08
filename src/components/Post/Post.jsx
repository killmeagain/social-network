import React from 'react';

const Post = () => {
	return (
		<div className="post">
			<div className="post__avatar">
				<img className="post__img" src="./assets/img/avatar.jpg" alt="Аватар" />
			</div>
			<div className="post__information">
				<p className="post__name"></p>
				<p className="post__text"></p>
			</div>
		</div>
	)
}