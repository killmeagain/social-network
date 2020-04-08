import React from 'react';

const Navigation = () => {
	return (
		<nav className="main-navigation">
			<ul className="main-navigation__list">
				<li className="main-navigation__item">
					<a className="main-navigation__link" href="#">Новости</a>
				</li>

				<li className="main-navigation__item">
					<a className="main-navigation__link" href="#">Мой профиль</a>
				</li>

				<li className="main-navigation__item">
					<a className="main-navigation__link" href="#">Мои сообщения</a>
				</li>

				<li className="main-navigation__item">
					<a className="main-navigation__link" href="#">Моя музыка</a>
				</li>

				<li className="main-navigation__item">
					<a className="main-navigation__link" href="#">Мои фотографии</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation;