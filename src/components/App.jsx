import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import { Route } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfilePageConatainer from './ProfilePage/ProfilePageConatainer';

const App = () => {
	return (
			<div className="social-network">
				<Header />
				<div className="social-network__container">
					<Navigation />
					<div className="social-network__content">
						<Route path="/profile/:userId?" render={() => <ProfilePageConatainer />}/>
						<Route path="/dialogs" render={() => <DialogsContainer />}/>
						<Route path="/users" render={() => <UsersContainer />}/>
					</div>
				</div>
			</div>
	)
}

export default App;