'use client';

import { useEffect, useMemo, useState } from 'react';
import { vars } from '../style/theme.css';
import { debounce } from 'lodash-es';
import * as styles from './style/startLayer.css';

const COLORS = [
	vars.colors.primary1,
	vars.colors.primary2,
	vars.colors.secondary1,
	vars.colors.secondary2,
	vars.colors.offWhite,
];

const StarLayer = () => {
	const [height, setHeight] = useState<number>(0);
	const [width, setWidth] = useState<number>(0);
	const [randomValues, setRandomValues] = useState<number[]>([]);

	const layerCount = 15;
	const starDensity = Math.trunc(((height * width) / 600000) * layerCount);

	const resizeCallback = useMemo(
		() =>
			debounce(() => {
				setHeight(window.innerHeight);
				setWidth(window.innerWidth);
			}, 150),
		[]
	);

	useEffect(() => {
		resizeCallback();
		window.addEventListener('resize', resizeCallback);
		return () => window.removeEventListener('resize', resizeCallback);
	}, [resizeCallback]);

	useEffect(() => {
		setRandomValues(Array.from({ length: layerCount }, () => Math.random()));
	}, [layerCount]);

	return (
		<div className={styles.container}>
			{randomValues.map((randomConstant, i) => (
				<div
					className={styles.stars}
					key={i}
					style={{
						animationDuration: `${randomConstant * 5 + 5}s`,
						animationDelay: `${randomConstant * 5}s`,
					}}
				>
					{Array.from({ length: starDensity }, (_, j) => (
						<div
							className={styles.star}
							key={j}
							style={{
								backgroundColor: `${COLORS[j % COLORS.length]}`,
								width: `${randomConstant * 2 + 1}px`,
								height: `${randomConstant * 2 + 1}px`,
								top: `${Math.random() * height}px`,
								left: `${Math.random() * width}px`,
							}}
						>
							<div className={styles.blur} />
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default StarLayer;
