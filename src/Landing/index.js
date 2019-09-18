import React from 'react';
import styled from 'styled-components';

import LandingOptions from './LandingOptions';
import { Wrapper } from '../Shared/Styles';
import friend_img from '../Images/friends.jpg';
import blog_img from '../Images/blog.jpg';

const LandingStyle = styled.div`
	width: 100%;
	height: 80vh;
	background-color: white;
	padding-top: 4rem;
`;

const Title = styled.h2`
	color: black;
	padding-bottom: 1rem;
	letter-spacing: 2px;
	text-transform: uppercase;
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
					<LandingOptions name="FRIENDS" backgroundIMG={friend_img} />
					<LandingOptions name="BLOG" backgroundIMG={blog_img} />
					<LandingOptions name="MESSAGES" />
				</LandingGrid>
			</Wrapper>
		</LandingStyle>
	);
};

export default Landing;
