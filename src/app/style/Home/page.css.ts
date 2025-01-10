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
