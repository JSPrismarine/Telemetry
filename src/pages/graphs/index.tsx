import Charting from '../../components/charting';
import LoaderComponent from '../../components/loader';
import Page from '../../components/page';
import useSWR from 'swr';

const GraphsPage = () => {
    const { data: alltime } = useSWR('/api/heartbeat/all-time');
    const { data: alive } = useSWR('/api/heartbeat/alive');

    if (!alltime || !alive) return <LoaderComponent />;

    return (
        <Page>
            <h1>Alive</h1>
            <Charting data={alive?.heartbeats} />

            <h1>All-time</h1>
            <Charting data={alltime?.heartbeats} />
        </Page>
    );
};

export default GraphsPage;
