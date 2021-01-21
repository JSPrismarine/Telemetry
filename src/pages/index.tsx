import Page from '../components/page';
import useSWR from 'swr';

const IndexPage = () => {
    const { data: alive } = useSWR('/api/heartbeat/alive');
    const { data: alltime } = useSWR('/api/heartbeat/all-time');

    return (
        <Page>
            <div>Alive: {alive?.heartbeats?.length}</div>
            <div>All-Time: {alltime?.heartbeats?.length}</div>
        </Page>
    );
};

export default IndexPage;
