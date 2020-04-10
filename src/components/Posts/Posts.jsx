import React from 'react';
import Post from '../Post/Post';

const Posts = (props) => {
	// Деструктуризация props, которые нужны этой компоненте. Все они описаны в контейнерной компоненте.
	const { addPost, onChangeMessage, posts, postMessage } = props;
	// Мапим массив с постами в массив с элементами JSX
	const arrayPosts = posts.map(post => {
		return (
			<li className="posts__item">
				<Post post={post.post} />
			</li>
		)
	})

	// Обработчик события onClick на кнопке отправки поста.
	let handlerButtonClick = () => {
		addPost();
	}

	// Обработчик события onChange в текстовом поле.
	let handlerTextAreaChange = (event) => {
		let text = event.target.value;
		onChangeMessage(text);
	}

	// Возвращаем JSX
	return (
		<div className="posts">
			<h2 className="posts__title">Мои записи на стене</h2>
			<div className="posts__textfield-container">
				<textarea
					onChange 		= { handlerTextAreaChange }
					value 			= { postMessage }
					className 		= "posts__textfield"
					name 			= "posts"
					placeholder 	= "Напишите ваш пост" />

				<button
					onClick 		= { handlerButtonClick }
					className 		= "posts__send-button"
					type 			= "button">
					Отправить
				</button>
			</div>

			<ul className="posts__list">
				{ arrayPosts }
			</ul>
		</div>
	)
}

export default Posts;