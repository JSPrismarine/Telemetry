import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const ErrorPage = () => {
    const { data } = useSWR(`/api/error`);

    return (
        <div>
            {data.errors.map((error) => (
                <Link key={error.id} href={`/error/${error.id}`}></Link>
            ))}
        </div>
    );
};

export default ErrorPage;
