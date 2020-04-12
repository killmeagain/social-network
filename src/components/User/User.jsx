import React from 'react';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    // Деструктуризирую пропсы для компоненты
    const { id, status, isFollowed, name, photo, follow, unfollow } = props;
    const avatar = photo || './assets/img/avatar.jpg';
    const userStatus = status || 'У этого пользователя нет статуса';
    
    // Обработчик события onClick на кнопке подписки
    const hadlerFollowButtonClick = () => {
        follow(id);
    }

    // Обработчик события onClick на кнопке отписки
    const hadlerUnFollowButtonClick = () => {
        unfollow(id);
    }


    return (
        <div className="user">
            <div className="user__information">
                <div className="user__avatar">
                    <NavLink className="user__link" to={"/profile/" + id}>
                        <img className="user__img" src={avatar} alt="Ваш аватар" />
                    </NavLink>
                </div>
                <div className="user__location-and-name">
                    <p className="user__name">{name}</p>
                    <p className="user__location">{userStatus}</p>
                </div>
            </div>
            { isFollowed ?  <button onClick={hadlerUnFollowButtonClick} className="user__followed-button">Удалить из друзей</button> : 
                            <button onClick={hadlerFollowButtonClick} className="user__followed-button">Добавить в друзья</button> }
        </div>
    )
}

export default User;