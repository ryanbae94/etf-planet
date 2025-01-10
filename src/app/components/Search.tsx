'use client';
import { useEffect, useState } from 'react';
import * as styles from './style/search.css';

const MOCK_DATA = [
	{
		symbol: 'blue',
		ticker: 'GOOGL',
		name: 'Alphabet Inc Class A',
	},
	{
		symbol: 'blue',
		ticker: 'GOOGL',
		name: 'Alphabet Inc Class A',
	},
	{
		symbol: 'blue',
		ticker: 'GOOGL',
		name: 'Alphabet Inc Class A',
	},
	{
		symbol: 'red',
		ticker: 'AAPL',
		name: 'Apple',
	},
	{
		symbol: 'green',
		ticker: 'QQQM',
		name: 'Invesco NASDAQ 100 ETF',
	},
];

const Search = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const [showDropDown, setShowDropDown] = useState<boolean>(false);
	const [filteredData, setFilteredData] = useState<typeof MOCK_DATA>([]);

	useEffect(() => {
		const filteredData = MOCK_DATA.filter((item) =>
			item.ticker.toLowerCase().includes(searchValue.toLowerCase())
		);
		setFilteredData(filteredData);
	}, [searchValue]);

	useEffect(() => {
		if (!searchValue) {
			setShowDropDown(false);
		}
	}, [searchValue]);

	return (
		<div className={styles.container}>
			<div
				className={`${styles.searchArea} ${
					showDropDown ? styles.searchAreaWithDropdown : ''
				}`}
			>
				<input
					className={styles.searchInput}
					placeholder='ETF 티커를 입력하세요.'
					value={searchValue}
					onChange={(e) => {
						setSearchValue(e.target.value);
						setShowDropDown(true);
					}}
				/>
			</div>
			{showDropDown &&
				searchValue &&
				(filteredData.length == 0 ? (
					<div className={styles.dropDown}>
						<div className={styles.dropDownItem}>검색 결과가 없습니다.</div>
					</div>
				) : (
					<div className={styles.dropDown}>
						{filteredData.map((item, index) => (
							<div key={index} className={styles.dropDownItem}>
								{item.ticker} | {item.name}
							</div>
						))}
					</div>
				))}
		</div>
	);
};

export default Search;
