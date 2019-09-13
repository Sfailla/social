import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	width: 100%;
	height: 6rem;
	background-color: #282c34;
	color: white;
`;

function App() {
	return (
		<Header>
			<h2>this is the header</h2>
		</Header>
	);
}

export default App;
