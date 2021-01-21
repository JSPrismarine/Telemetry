import styles from './page.module.scss';

const Page = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default Page;
