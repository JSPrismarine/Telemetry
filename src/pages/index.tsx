import useSWR from 'swr';

const IndexPage = () => {
    const { data: alive } = useSWR('/api/heartbeat/alive');
    const { data: alltime } = useSWR('/api/heartbeat/all-time');

    return (
        <div>
            <div>Alive: {alive?.heartbeats?.length}</div>
            <div>All-Time: {alltime?.heartbeats?.length}</div>
        </div>
    );
};

export default IndexPage;
