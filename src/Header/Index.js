import React from 'react';
import styled from 'styled-components';

import { Wrapper } from '../Shared/Styles';
import TopHeader from './TopHeader';
import Banner from './Banner';
import AppBar from '../App/AppBar';

const HeaderStyle = styled.header`
	width: 100%;
	height: 32rem;
	color: white;
`;

const Header = () => {
	return (
		<HeaderStyle>
			<Wrapper>
				<TopHeader />
			</Wrapper>
			<Banner />
			<AppBar />
		</HeaderStyle>
	);
};

export default Header;
