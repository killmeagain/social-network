import React from 'react';
import Post from '../Post/Post';


const Posts = (props) => {

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch({type: "ADD-POST"});
	}

	let onChangeMessage = () => {
		let text = newPostElement.current.value;
		props.dispatch({type: "UPDATE-NEW-POST-TEXT", message: text});
	}

	return (
		<div className="posts">
			<h2 className="posts__title">Мои записи на стене</h2>
			<div className="posts__textfield-container">
				<textarea 
					onChange={ onChangeMessage } 
					value={ props.postMessage } 
					ref={ newPostElement } 
					className="posts__textfield" 
					name="posts" 
					placeholder="Напишите ваш пост" />

				<button 
					onClick={ addPost } 
					className="posts__send-button" 
					type="button">Отправить</button>
			</div>

			<ul className="posts__list">
				{props.posts.map( post => (
					<li className="posts__item">
						<Post post = { post.post } />
					</li>
				))}
			</ul>
		</div>
	)
}

export default Posts;