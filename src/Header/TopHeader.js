import React from 'react';
import styled from 'styled-components';

import NavLinks from './NavLinks';

const TopHeaderStyle = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Do+Hyeon|Oxygen&display=swap');
	width: 100%;
	height: 6rem;
	background-color: white;
	font-family: Oxygen;
	color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
`;

const Title = styled.h2`
	font-family: Do Hyeon;
	font-size: 2rem;
`;

const TopHeader = () => (
	<TopHeaderStyle>
		<Title>Social {'{ Logo }'}</Title>
		<NavLinks />
	</TopHeaderStyle>
);

export default TopHeader;
