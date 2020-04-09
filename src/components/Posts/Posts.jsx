import React from 'react';
import Post from '../Post/Post';


const Posts = (props) => {
	return (
		<div className="posts">
			<h2 className="posts__title">Мои записи на стене</h2>
			<div className="posts__textfield-container">
				<textarea className="posts__textfield" name="posts" placeholder="Напишите ваш пост"></textarea>
				<button className="posts__send-button" type="button">Отправить</button>
			</div>
			<ul className="posts__list">
				{props.posts.map( post => (
					<li className="posts__item">
						<Post post = {post.post} />
					</li>
				))}
				
			</ul>
		</div>
	)
}

export default Posts;