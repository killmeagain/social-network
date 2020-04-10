import Users from './Users';
import { connect } from 'react-redux';
import { FOLLOW_AC, UNFOLLOW_AC, SET_USERS_AC } from '../../redux/users-reducer';


const mapStateToProps = state => {
    return {
        // Юзеры для страницы юзеров
        users: state.usersPage.users
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // Функция, которая выполняется при срабатывании события onClick на кнопке подписки
        follow: userId => dispatch(FOLLOW_AC(userId)),
        // Функция, которая выполняется при срабатывании события onClick на кнопке отписки
        unfollow: userId => dispatch(UNFOLLOW_AC(userId)),
        setUsers: users => dispatch(SET_USERS_AC(users))
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;