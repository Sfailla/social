import React from 'react';
import styled from 'styled-components';

import LandingOptions from './LandingOptions';
import { Wrapper } from '../Shared/Styles';

const LandingStyle = styled.div`
	width: 100%;
	height: 80vh;
	background-color: lightgrey;
	color: black;
	padding-top: 4rem;
`;

const Title = styled.h2`
	padding-bottom: 1rem;
	font-size: 2.2rem;
	font-family: Do Hyeon;
`;

const LandingGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
`;

const Landing = () => {
	return (
		<LandingStyle>
			<Wrapper>
				<Title>What would you like to do?</Title>
				<LandingGrid>
					<LandingOptions name="FRIENDS" />
					<LandingOptions name="BLOG" />
					<LandingOptions name="MESSAGES" />
				</LandingGrid>
			</Wrapper>
		</LandingStyle>
	);
};

export default Landing;
