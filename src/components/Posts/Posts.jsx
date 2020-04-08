import React from 'react';


const Posts = () => {
	return (
		<div className="posts">
			<h2 className="posts__title">Мои записи на стене</h2>
			<div className="posts__textfield-container">
				<textarea className="posts__textfield" name="posts"></textarea>
				<button className="posts__send-button" type="button">Отправить</button>
			</div>
			<ul className="posts__list">
				<li className="posts__item">

				</li>
			</ul>
		</div>
	)
}

export default Posts;