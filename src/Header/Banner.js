import React from 'react';
import styled from 'styled-components';

const BannerStyle = styled.div`
	width: 100%;
	height: calc(100% - 6rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
	text-transform: uppercase;
	font-size: 3.5rem;
	color: #34c7c1;
`;

const SubTitle = styled.h3``;

const Banner = () => {
	return (
		<BannerStyle>
			<Title>Social</Title>
			<SubTitle>social media done right!</SubTitle>
		</BannerStyle>
	);
};

export default Banner;
