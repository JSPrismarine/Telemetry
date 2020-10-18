import useSWR from 'swr';
import { useRouter } from 'next/router';
import HearbeatList from '../../components/hearbeatlist';
import Heartbeat from '../../components/heartbeat';

const ServerPage = () => {
    const router = useRouter();
    const { data } = useSWR(`/api/heartbeat/${router.query.id}`);

    return (
        <div>
            <HearbeatList>
                {data?.heartbeats.map(item => {
                    return (
                        <Heartbeat data={item} />
                    );
                })}
            </HearbeatList>
        </div>
    );
};

export default ServerPage;
