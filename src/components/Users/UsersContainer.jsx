import React from 'react';
import Users from './Users';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { FOLLOW_AC, UNFOLLOW_AC, SET_USERS_AC, SET_USERS_COUNT_AC, SET_PAGINATION_COUNTER_INCREMENT_AC, SET_PAGINATION_COUNTER_DECREMENTT_AC, SET_CURRENT_PAGE_AC, SET_IS_FETCHING_AC } from '../../redux/users-reducer';

class UsersContainer extends React.Component {

    // В момент монтирования компоненты делаем запрос на пользователей
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    }
    // Отправка запроса при изменении страницы
    changePage(page) {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    }

    render() {
        return (
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                paginationCounter={this.props.paginationCounter}

                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setPaginationCouterIncrement={this.props.setPaginationCouterIncrement}
                setPaginationCouterDecrement={this.props.setPaginationCouterDecrement}
                changePage={this.changePage.bind(this)}
                isFetching={this.props.isFetching}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        // Юзеры для страницы юзеров
        users: state.usersPage.users,
        // Текущая страница
        currentPage: state.usersPage.currentPage,
        // Количество пользователей на странице
        pageSize: state.usersPage.pageSize,
        // Количество пользователей на сервере
        totalUsersCount: state.usersPage.totalUsersCount,
        // Счетчик пагинации
        paginationCounter: state.usersPage.paginationCounter,
        // Показатель загрузки
        isFetching: state.usersPage.isFetching
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // Функция, которая выполняется при срабатывании события onClick на кнопке подписки
        follow: userId => dispatch(FOLLOW_AC(userId)),
        // Функция, которая выполняется при срабатывании события onClick на кнопке отписки
        unfollow: userId => dispatch(UNFOLLOW_AC(userId)),
        // Закидывает пользователей в стэйт
        setUsers: users => dispatch(SET_USERS_AC(users)),
        // Закидывает общее количество пользователей на сервере в стэйт
        setUsersCount: usersCount => dispatch(SET_USERS_COUNT_AC(usersCount)),
        // Закидывает текущую страницу в стэйт
        setCurrentPage: currentPage => dispatch(SET_CURRENT_PAGE_AC(currentPage)),
        // Увеличивает счетчик пагинации
        setPaginationCouterIncrement: () => dispatch(SET_PAGINATION_COUNTER_INCREMENT_AC()),
        // Уменьшает счетчик пагинации
        setPaginationCouterDecrement: () => dispatch(SET_PAGINATION_COUNTER_DECREMENTT_AC()),
        // Установказначения прелоадера
        setIsFetching: isFetching => dispatch(SET_IS_FETCHING_AC(isFetching)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);