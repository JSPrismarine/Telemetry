import HearbeatList from '../../components/hearbeatlist';
import Heartbeat from '../../components/heartbeat';
import Page from '../../components/page';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const ServerPage = () => {
    const router = useRouter();
    const { data } = useSWR(`/api/heartbeat/${router.query.id}`);

    return (
        <Page>
            <HearbeatList>
                {data?.heartbeats.map((item) => {
                    return <Heartbeat data={item} />;
                })}
            </HearbeatList>
        </Page>
    );
};

export default ServerPage;
