import { useRouter } from 'next/router';
import useSWR from 'swr';

const ErrorPage = () => {
    const router = useRouter();
    const { data } = useSWR(`/api/error`);

    return (
        <div>
            <code>{JSON.stringify(data, null, 4)}</code>
        </div>
    );
};

export default ErrorPage;
