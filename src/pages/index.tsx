import useSWR from 'swr';

const IndexPage = () => {
    const { data: alive } = useSWR('/api/heartbeat/alive');

    return (
        <div>
            <div>Alive servers: {alive?.heartbeats?.length}</div>
        </div>
    );
};

export default IndexPage;
