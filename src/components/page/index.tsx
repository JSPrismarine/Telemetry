import styles from './page.module.scss';

const Page = ({ children }) => {
    return (
        <main className={styles.container}>
            <div className={styles.content}>{children}</div>
        </main>
    );
};

export default Page;
