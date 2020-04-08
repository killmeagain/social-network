import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import ProfilePage from './ProfilePage/ProfilePage';

const App = () => {
	return (
		<div className="social-network">
			<Header />
			<div className="social-network__container">
				<Navigation />
				<div className="social-network__content">
					<ProfilePage />
				</div>
			</div>

		</div>
	)
}

export default App;