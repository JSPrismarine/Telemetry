import Link from 'next/link';
import moment from 'moment';
import useSWR from 'swr';

const ErrorPage = () => {
    const { data } = useSWR(`/api/error`);

    return (
        <ul>
            {data?.errors?.map?.((error) => (
                <li>
                    <Link key={error.id} href={`/error/${error.id}`}>
                        {moment(error.timestamp).format('LLLL')} - {error.name}: {error.message}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ErrorPage;
