import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
	colors: {
		primary1: '#DFA9A7',
		primary2: '#7E4B77',
		primary3: '#3D334F',
		primary4: '#1F1D34',
		secondary1: '#FFF5BF',
		secondary2: '#FFD600',
		offWhite: '#F8F8F8',
		gray1: '#DCDCDC',
		gray2: '#B5B5B5',
		gray3: '#727272',
		gray4: '#474747',
		black: '#151515',
		error: '#F45452',
	},
});
