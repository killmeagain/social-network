import { ADD_POST_AC, UPDATE_NEW_POST_TEXT_AC } from '../../redux/profile-reducer';
import Posts from './Posts'
import { connect } from 'react-redux';

// Прокидывает в props данные из state в сторе
const mapStateToProps = state => {
	return {
		// Все посты на стене (Массив объектов)
		posts: state.profilePage.posts,
		// Сообщение в текстовом поле
		postMessage: state.profilePage.postMessage
	}
};


// Прокидывает колбэки из стора
const mapDispatchToProps = dispatch => {
	return {
		// Функция добовления поста на странице профиля.
		addPost: () => {
			dispatch(ADD_POST_AC());
		},

		// Функция, которая выполняется при срабатывании события onChange в текстовом поле.
		onChangeMessage: (text) => {
			dispatch(UPDATE_NEW_POST_TEXT_AC(text));
		}
	}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

// Самопальная контейнерная компонента
// const PostsContainer = (props) => {
	
// 	const { store } 		= props;
// 	const state 			= store.getState();
// 	const posts 			= state.profilePage.posts;
// 	const postMessage 		= state.profilePage.postMessage;

// 	let addPost = () => {
// 		store.dispatch(ADD_POST_AC());
// 	}

// 	let onChangeMessage = (text) => {
// 		store.dispatch(UPDATE_NEW_POST_TEXT_AC(text));
// 	}

// 	return <Posts 
// 		addPost				= { addPost } 
// 		onChangeMessage		= { onChangeMessage } 
// 		posts				= { posts } 
// 		postMessage			= { postMessage } 
// 	/>
// }

export default PostsContainer;