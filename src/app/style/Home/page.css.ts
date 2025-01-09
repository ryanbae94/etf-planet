import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100vw',
	height: '100vh',
});

export const centerBox = style({
	display: 'flex',
	gap: '1rem',
	alignItems: 'center',
	flexDirection: 'column',
	fontSize: '2rem',
	color: 'white',
});

export const searchArea = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '150%',
	height: '4rem',
	border: '1px solid white',
	borderRadius: '25px',
});

export const searchInput = style({
	width: '80%',
	fontSize: '1.5rem',
	border: 'none',
	backgroundColor: 'transparent',
	color: 'white',
	padding: '3px',
	'::placeholder': {
		textAlign: 'center',
		color: 'gray',
	},
});
