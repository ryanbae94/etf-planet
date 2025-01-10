import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '150%',
	height: '100%',
	position: 'relative',
});

export const searchArea = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '4rem',
	width: '100%',
	border: '1px solid white',
	borderRadius: '25px',
});

export const searchAreaWithDropdown = style({
	borderRadius: '25px 25px 0 0',
	borderBottom: 'none',
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

export const dropDown = style({
	display: 'flex',
	width: '100%',
	flexDirection: 'column',
	fontSize: '1rem',
	position: 'absolute',
	top: 'calc(4rem - 1px)',
	backgroundColor: 'rgba(0, 0, 0, 0.9)',
	borderRadius: '0 0 25px 25px',
	border: '1px solid white',
	maxHeight: '300px',
	overflowY: 'auto',
});

export const dropDownItem = style({
	display: 'flex',
	padding: '10px 16px',
	borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
	width: '100%',
	color: 'white',
	cursor: 'pointer',
	':hover': {
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
	},
});
