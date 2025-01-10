import Search from './components/Search';
import * as styles from './style/Home/page.css';

export default function Home() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.centerBox}>
					<h1>ETF Planet</h1>
					<Search />
				</div>
			</div>
		</>
	);
}
