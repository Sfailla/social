import React from 'react';
import styled from 'styled-components';

import { MainBG, GreenBlueText, FlexCenter } from '../Shared/Styles';

const BannerStyle = styled.div`
	width: 100%;
	height: calc(100% - 12rem);
	${MainBG};
	${FlexCenter};
	flex-direction: column;
`;

const Title = styled.h1`
	text-transform: uppercase;
	font-size: 3.5rem;
	font-family: Audiowide;
	letter-spacing: 2px;
	${GreenBlueText};
`;

const SubTitle = styled.h3`
	font-family: Oxygen;
	font-size: 2rem;
`;

const Banner = () => {
	return (
		<BannerStyle>
			<Title>Social</Title>
			<SubTitle>social media done right!</SubTitle>
		</BannerStyle>
	);
};

export default Banner;
