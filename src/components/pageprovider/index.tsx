import Header from '../header';
import styles from './pageprovider.module.scss';

const PageProvider = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
            <footer>
                <span>&copy; 2020-2021 the JSPrismarine development team</span>
                {' - '}
                <span>
                    Built by <a href="https://github.com/filfat">Filiph Sandström</a>
                </span>
            </footer>
        </div>
    );
};

export default PageProvider;
