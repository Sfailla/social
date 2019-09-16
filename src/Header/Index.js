import React from 'react';
import styled from 'styled-components';

import { Wrapper } from '../Shared/Styles';
import TopHeader from './TopHeader';
import Banner from './Banner';

const HeaderStyle = styled.header`
	width: 100%;
	height: 26rem;
	color: white;
`;

const Header = () => {
	return (
		<HeaderStyle>
			<Wrapper>
				<TopHeader />
			</Wrapper>
			<Banner />
		</HeaderStyle>
	);
};

export default Header;
