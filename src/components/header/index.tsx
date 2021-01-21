import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>JSPrismarine Telemetry</div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/graphs">Graphs</Link>
                <Link href="/error">Crash logs</Link>
            </nav>
        </header>
    );
};

export default Header;
