import React from 'react';
import User from '../User/User';
import * as axios from 'axios'


const Users = (props) => {
    // Деструктуризирую пропсы для компоненты
    const { users, follow, unfollow, setUsers } = props;

    // const usersAPI = [
    //     { id: 1, isFollowed: true, name: "Тимофей Судаков", status: 'Гурьевск' },
    //     { id: 2, isFollowed: false, name: "Дмитрий Щеглов", status: 'Туринск' },
    //     { id: 3, isFollowed: true, name: "Дмитрий Синенков", status: 'Озерск' },
    //     { id: 4, isFollowed: false, name: "Артемий Багин", status: 'Киров' },
    //     { id: 5, isFollowed: true, name: "Иван Матюшенко", status: 'Североуральск' },
    // ];
    
    if(users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => setUsers(response.data.items));
    }
    
    // Мапим список массив юзеров в массив элементов JSX
    const usersElements = users.map(user => {
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
                {usersElements}
            </ul>
        </section>
    )
}

export default Users;