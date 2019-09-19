import React, { Fragment } from 'react';

import { LoadedFonts } from '../Shared/Styles';
import Header from '../Header/index';
import Landing from '../Landing/index';
import Footer from './Footer';

const App = () => {
	return (
		<Fragment>
			<LoadedFonts>
				<Header />
				<Landing />
				<Footer />
			</LoadedFonts>
		</Fragment>
	);
};

export default App;
