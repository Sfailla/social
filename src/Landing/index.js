import React from 'react';
import styled from 'styled-components';

import LandingOptions from './LandingOptions';
import LandingGrid from './LandingGrid';
import { Wrapper } from '../Shared/Styles';
import friend_img from '../Images/friends.jpg';
import blog_img from '../Images/blog.jpg';
import event_img from '../Images/events-1.jpeg';

const LandingStyle = styled.div`
	width: 100%;
	height: 100%;
	background-color: white;
	margin: 10rem 0;
`;

const Landing = () => {
	return (
		<LandingStyle>
			<Wrapper>
				<LandingGrid>
					<LandingOptions name="FRIENDS" backgroundIMG={friend_img} />
					<LandingOptions name="BLOG" backgroundIMG={blog_img} />
					<LandingOptions name="EVENTS" backgroundIMG={event_img} />
				</LandingGrid>
			</Wrapper>
		</LandingStyle>
	);
};

export default Landing;
