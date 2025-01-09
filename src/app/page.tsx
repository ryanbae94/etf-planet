import StarLayer from './components/StarLayer';
import * as styles from './style/Home/page.css';

export default function Home() {
	return (
		<>
			<StarLayer />
			<div className={styles.container}>
				<div className={styles.centerBox}>
					<h1>ETF Planet</h1>
					<div className={styles.searchArea}>
						<input
							className={styles.searchInput}
							placeholder='ETF 티커를 입력하세요.'
						/>
					</div>
				</div>
			</div>
		</>
	);
}
