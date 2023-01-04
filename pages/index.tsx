import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Next.js Amplify</title>
				<meta name='description' content='Next.js Amplify' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<div className={styles.description}>
					<p>Next.js Amplify - {process.env.PROJECT_NAME || '--'}</p>
				</div>
			</main>
		</>
	);
}
