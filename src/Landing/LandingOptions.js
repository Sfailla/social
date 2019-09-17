import React from 'react';
import styled from 'styled-components';

const OptionStyles = styled.div`
	width: 100%;
	height: 400px;
	background-color: white;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
		0 4px 6px -2px rgba(0, 0, 0, 0.1);
`;

const LandingOptions = ({ name }) => {
	return (
		<OptionStyles>
			<h3>{name}</h3>
		</OptionStyles>
	);
};

export default LandingOptions;
