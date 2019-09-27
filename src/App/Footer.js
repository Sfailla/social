import React from 'react';
import styled from 'styled-components';
import { MainBG, FlexCenter, GreenBlue } from '../Shared/Styles';

const FooterStyles = styled.div`
	width: 100%;
	height: 8rem;
	color: white;
	letter-spacing: 2px;
	${MainBG};
	${FlexCenter};
`;

const Span = styled.span`color: ${GreenBlue};`;

const Footer = () => {
	return (
		<FooterStyles>
			<h3>
				Made by
				<Span> Steven Failla </Span> copyright <Span> 2019 </Span>
			</h3>
		</FooterStyles>
	);
};

export default Footer;
