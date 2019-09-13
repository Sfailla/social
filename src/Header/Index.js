import React from 'react';
import styled from 'styled-components';

import TopHeader from './TopHeader';
import Banner from './Banner';

const HeaderStyle = styled.header`
	width: 100%;
	height: 26rem;
	background-color: #282c34;
	color: white;
`;

const Header = () => {
	return (
		<HeaderStyle>
			<TopHeader />
			<Banner />
		</HeaderStyle>
	);
};

export default Header;
