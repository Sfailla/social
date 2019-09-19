import React from 'react';
import styled from 'styled-components';

const LandingGridStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;

	@media (max-width: 76.25em) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, 300px);
		grid-gap: 2rem;
	}
`;

const LandingGrid = props => (
	<LandingGridStyle>{props.children}</LandingGridStyle>
);

export default LandingGrid;
