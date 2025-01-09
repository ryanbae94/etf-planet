import { vars } from '@/app/style/theme.css';
import { keyframes, style } from '@vanilla-extract/css';

export const container = style({
	zIndex: '-9999',
	background: 'black',
	position: 'absolute',
	overflow: 'hidden',
	width: '100%',
	height: '100%',
});

export const twinkle = keyframes({
	'0%': { opacity: 0, animationTimingFunction: 'ease-in' },
	'60%': { opacity: 1, animationTimingFunction: 'ease-out' },
	'80%': { opacity: 0 },
	'100%': { opacity: 0 },
});

export const stars = style({
	opacity: 0,
	animation: `${twinkle}`,
	animationTimingFunction: 'linear',
	animationIterationCount: 'infinite',
});

export const star = style({
	position: 'absolute',
	background: vars.colors.offWhite,
	borderRadius: '5px',
});

export const blur = style({
	filter: 'blur(5px)',
});
