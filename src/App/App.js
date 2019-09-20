import React, { Fragment } from 'react';

import { LoadedFonts } from '../Shared/Styles';
import Header from '../Header/index';
import Landing from '../Landing/index';
import Footer from './Footer';

export const App = () => {
	return (
		<div>
			<LoadedFonts>
				<Header />
				<Landing />
				<Footer />
			</LoadedFonts>
		</div>
	);
};

export default App;
