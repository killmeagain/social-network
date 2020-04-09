import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import ProfilePage from './ProfilePage/ProfilePage';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="social-network">
				<Header />
				<div className="social-network__container">
					<Navigation />
					<div className="social-network__content">
						<Route path="/profile" render={() => <ProfilePage 
																profile={ props.state.profilePage } 
																dispatch={ props.dispatch } />}/>
						<Route path="/dialogs" render={() => <Dialogs dialogs={ props.state.dialogsPage } dispatch={ props.dispatch } />}/>
					</div>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App;