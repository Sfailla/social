import React from 'react';
import styled from 'styled-components';
import { MainBG } from '../Shared/Styles';

const FooterStyles = styled.div`
	width: 100%;
	height: 8rem;
	${MainBG};
`;

const Footer = () => {
	return (
		<FooterStyles>
			<h3>This is the footer</h3>
		</FooterStyles>
	);
};

export default Footer;
