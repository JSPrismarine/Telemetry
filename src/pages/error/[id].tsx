import { useRouter } from 'next/router';
import useSWR from 'swr';

const ServerPage = () => {
    const router = useRouter();
    const { data } = useSWR(`/api/error/${router.query.id}`);

    return (
        <div>
            <code>{JSON.stringify(data, null, 4)}</code>
        </div>
    );
};

export default ServerPage;
