import React from 'react';
import User from '../User/User';
import Pagination from '../Pagination/Pagination';

// Свойства:
// users - список пользователей (Массив объектов)
// totalUsersCount - общее количество пользователей с сервера
// currentPage - текущая страница
// pageSize - количество пользователей на странице
// paginationCounter - счетчик пагинации

// Методы:
// follow - добавление в друзья
// unfollow - удаление из друзей
// changePage - метод запроса на сервер для получение пользователей
// setPaginationCouterIncrement - изменение счетчика пагинации в положительную сторону
// setPaginationCouterDecrement - изменение счетчика пагинации в отрицательную сторону


const Users = props => {

    const {
        users,
        totalUsersCount,
        currentPage,
        pageSize,
        paginationCounter,
        follow,
        unfollow,
        changePage,
        setPaginationCouterIncrement,
        setPaginationCouterDecrement
    } = props;

    let listUsersArray = users.map(user => {
        return (
            <li className="users__item">
                <User
                    id={user.id}
                    status={user.status}
                    isFollowed={user.followed}
                    name={user.name}
                    follow={follow}
                    unfollow={unfollow}
                    photo={user.photos.small}
                />
            </li>
        )
    })

    return (
        <section className="users">
            <ul className="users__list">
                {listUsersArray}
            </ul>
            <Pagination
                totalCount={totalUsersCount}
                currentPage={currentPage}
                pageSize={pageSize}
                paginationCounter={paginationCounter}

                changePage={changePage}
                setPaginationCouterIncrement={setPaginationCouterIncrement}
                setPaginationCouterDecrement={setPaginationCouterDecrement}
            />
        </section>
    )
}

export default Users;