import useSWR from 'swr';
import Charting from '../../components/charting';

const GraphsPage = () => {
    const { data: alltime } = useSWR('/api/heartbeat/all-time');
    const { data: alive } = useSWR('/api/heartbeat/alive');

    return (
        <div>
            <h1>All-time</h1>
            <Charting data={alltime?.heartbeats} />

            <h1>Alive</h1>
            <Charting data={alive?.heartbeats} />
        </div>
    );
};

export default GraphsPage;
