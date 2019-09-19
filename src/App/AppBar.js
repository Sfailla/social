import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from '../Shared/Styles';

const AppBarStyle = styled.div`
	width: 100%;
	height: 6rem;
	color: black;
	background-color: #00ffd0;
	${FlexCenter};
`;

const Title = styled.h2`
	color: black;
	letter-spacing: 2px;
	text-transform: uppercase;
	font-size: 2rem;
	font-family: Do Hyeon;
`;

const AppBar = () => {
	return (
		<AppBarStyle>
			<Title>Select an option below to get started!</Title>
		</AppBarStyle>
	);
};

export default AppBar;
