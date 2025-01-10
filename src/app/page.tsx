import Search from './components/Search';
import StarLayer from './components/StarLayer';
import * as styles from './style/Home/page.css';

export default function Home() {
	return (
		<>
			<StarLayer />
			<div className={styles.container}>
				<div className={styles.centerBox}>
					<h1>ETF Planet</h1>
					<Search />
				</div>
			</div>
		</>
	);
}
