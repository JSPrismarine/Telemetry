import Link from 'next/link';
import Page from '../../components/page';
import moment from 'moment';
import useSWR from 'swr';

const ErrorPage = () => {
    const { data } = useSWR(`/api/error`);

    return (
        <Page>
            <ul>
                {data?.errors?.map?.((entry) => (
                    <li key={entry.id}>
                        <Link href={`/error/${entry.id}`} passHref>
                            <a>
                                {moment(entry.timestamp).format('MM/DD/YYYY MM:HH:SS.SSS')} -{' '}
                                <b>{entry.error.name}</b>: <code>{entry.error.message}</code>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Page>
    );
};

export default ErrorPage;
