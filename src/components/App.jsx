import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';

const App = () => {
	return (
		<div className="social-network">
			<Header />
			<div className="social-network__content">
				<Navigation />
				
			</div>
			
		</div>
	)
}

export default App;