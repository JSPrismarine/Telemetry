import Header from '../header';
import styles from './pageprovider.module.scss';

const PageProvider = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default PageProvider;
