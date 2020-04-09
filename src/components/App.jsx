import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import ProfilePage from './ProfilePage/ProfilePage';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';

const App = () => {
	return (
		<BrowserRouter>
			<div className="social-network">
				<Header />
				<div className="social-network__container">
					<Navigation />
					<div className="social-network__content">
						<Route path="/profile" component={ProfilePage}/>
						<Route path="/dialogs" component={Dialogs}/>
					</div>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App;