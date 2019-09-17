import React from 'react';
import styled from 'styled-components';

const AppBarStyle = styled.div`
	width: 100%;
	height: 6rem;
	color: black;
	background-color: lightgrey;
`;

const AppBar = () => {
	return (
		<AppBarStyle>
			<h3>AppBar</h3>
		</AppBarStyle>
	);
};

export default AppBar;
