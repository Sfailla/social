import React from 'react';
import styled, { css } from 'styled-components';

import { BoxShadow, FlexCenter } from '../Shared/Styles';

const OptionStyles = styled.div`
	width: 100%;
	height: 393.33px;
	cursor: pointer;
	${BoxShadow.md};
	${props =>
		props.backgroundIMG &&
		css`
			background-image: url(${props => props.backgroundIMG});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
		`};

	@media (max-width: 76.25em) {
		height: 300px;
	}
`;

const Title = styled.h1`
	color: #00ffd0;
	font-size: 3rem;
	letter-spacing: 3px;
	padding: 0 2px;
	transition: .5s ease-in-out;
	background-color: rgba(0, 0, 0, .9);
`;

const OverlayStyles = styled.div`
	width: 100%;
	height: 393.33px;
	overflow: hidden;
	background-image: linear-gradient(
		135deg,
		transparent 0%,
		transparent 50%,
		rgba(0, 0, 0, .5) 50%
	);
	background-size: 305%;
	transition: .6s ease-in-out;
	position: relative;
	${FlexCenter};

	@media (max-width: 76.25em) {
		height: 300px;
	}

	&:hover {
		background-position: 100%;
		${BoxShadow.lg};

		${Title} {
			background-color: transparent;
		}
	}
`;

const LandingOptions = ({ name, backgroundIMG }) => {
	return (
		<OptionStyles backgroundIMG={backgroundIMG}>
			<OverlayStyles>
				<Title>{name}</Title>
			</OverlayStyles>
		</OptionStyles>
	);
};

export default LandingOptions;
