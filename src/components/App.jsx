import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import ProfilePage from './ProfilePage/ProfilePage';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';

const App = () => {
	return (
			<div className="social-network">
				<Header />
				<div className="social-network__container">
					<Navigation />
					<div className="social-network__content">
						<Route path="/profile" render={() => <ProfilePage />}/>
						<Route path="/dialogs" render={() => <DialogsContainer />}/>
					</div>
				</div>
			</div>
	)
}

export default App;