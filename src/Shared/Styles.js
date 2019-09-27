import styled from 'styled-components';

// const darkTheme = 'background-color: #333';

export const MainBG = 'background-color: #282c34';
export const GreenBlueText = 'color: #00ffd0';
export const GreenBlue = '#00ffd0';

export const Wrapper = styled.div`
	padding: 0 1rem;
	max-width: 1200px;
	margin: 0 auto;
`;

export const LoadedFonts = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Do+Hyeon|Oxygen|Audiowide&display=swap');
`;

export const FlexCenter = `
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BoxShadow = {
	sm: {
		'box-shadow':
			'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
	},
	md: {
		'box-shadow':
			'0 8px 12px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)'
	},
	lg: {
		'box-shadow':
			'0 10px 15px -4px rgba(0, 0, 0, 0.3), 0 7px 7px -5px rgba(0, 0, 0, 0.2)'
	}
};
