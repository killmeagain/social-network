import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className="main-navigation">
			<ul className="main-navigation__list">
				<li className="main-navigation__item">
					<NavLink className="main-navigation__link" to="/news" activeClassName="main-navigation__link_active">Новости</NavLink>
				</li>

				<li className="main-navigation__item">
					<NavLink className="main-navigation__link" to="/profile" activeClassName="main-navigation__link_active">Мой профиль</NavLink>
				</li>

				<li className="main-navigation__item">
					<NavLink className="main-navigation__link" to="/dialogs" activeClassName="main-navigation__link_active">Мои сообщения</NavLink>
				</li>

				<li className="main-navigation__item">
					<NavLink className="main-navigation__link" to="/music" activeClassName="main-navigation__link_active">Моя музыка</NavLink>
				</li>

				<li className="main-navigation__item">
					<NavLink className="main-navigation__link" to="/photos" activeClassName="main-navigation__link_active">Мои фотографии</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation;